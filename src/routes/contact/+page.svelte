<script>
    import { enhance } from '$app/forms';
    import { browser } from '$app/environment';
    import { onMount, tick } from 'svelte';
    import { confetti } from '@neoconfetti/svelte';
    import { trackEvent } from '$lib/analytics';
    export let form;

    const totalSteps = 4;
    const recaptcha_site_key = '6LcSEMspAAAAAOl-b_fZccdnPb707gUn7olI4AF4';

    const steps = [
        { id: 1, label: 'About you', hint: 'Who to reply to' },
        { id: 2, label: 'The work', hint: "What's eating time" },
        { id: 3, label: 'The problem', hint: 'Where it hurts' },
        { id: 4, label: 'Scope', hint: 'Then we send it' }
    ];

    const peopleOptions = [
        { value: 'Just me', label: 'Just me', hint: 'Solo operator' },
        { value: '2–5 people', label: '2–5', hint: 'Small team' },
        { value: '6–20 people', label: '6–20', hint: 'Growing team' },
        { value: '20+ people', label: '20+', hint: 'Larger org' }
    ];

    const budgetOptions = [
        { value: 'Under $10,000', label: 'Under $10k', hint: 'A focused tool' },
        { value: '$10,000 - $25,000', label: '$10k–$25k', hint: 'Typical starting range' },
        { value: '$25,000 - $75,000', label: '$25k–$75k', hint: 'Core operations' },
        { value: '$75,000+', label: '$75k+', hint: 'A larger platform' },
        { value: 'Not sure yet', label: 'Not sure yet', hint: "We'll help you figure it out" }
    ];

    let formElement;
    let recaptchaContainer;
    let recaptchaWidgetId = null;
    let recaptchaReady = false;
    let recaptchaError = false;

    let step = 1;
    let direction = 0;
    let shake = false;
    let showErrors = false;
    let showOverlay = false;
    let formSuccess = false;
    let formSubmissionMessage = '';
    let loadingMessage = 'Sending your assessment…';
    let loadingTimer;
    let prefersReducedMotion = false;

    let username = '';
    let email = '';
    let phone = '';
    let manual_work = '';
    let current_software = '';
    let biggest_problem = '';
    let people_involved = '';
    let budget = '';

    $: firstName = username.trim().split(/\s+/)[0] || '';
    $: emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    $: step1Valid = username.trim().length >= 2 && emailValid;
    $: step2Valid = manual_work.trim().length > 0;
    $: step3Valid = biggest_problem.trim().length > 0;
    $: currentValid = step === 1 ? step1Valid : step === 2 ? step2Valid : step === 3 ? step3Valid : true;
    $: progress = (step / totalSteps) * 100;

    $: manualHint =
        manual_work.trim().length === 0
            ? 'Spreadsheets, copy-paste, chasing people — whatever it is.'
            : manual_work.trim().length < 40
                ? 'A little more context helps us give a useful answer.'
                : 'This is the kind of detail we can actually use.';

    $: problemHint =
        biggest_problem.trim().length === 0
            ? 'The bottleneck, the late nights, the thing that keeps breaking.'
            : biggest_problem.trim().length < 40
                ? 'What does that cost you in time, mistakes, or missed work?'
                : 'Clear enough for us to come back with a real opinion.';

    onMount(() => {
        prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        window.onContactRecaptchaLoad = () => {
            recaptchaReady = true;
        };

        if (window.grecaptcha?.render) {
            recaptchaReady = true;
            return;
        }

        const existing = document.querySelector('script[src*="recaptcha/api.js"]');
        if (existing) return;

        const script = document.createElement('script');
        script.src = 'https://www.google.com/recaptcha/api.js?onload=onContactRecaptchaLoad&render=explicit';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
    });

    function formatPhone(value) {
        const digits = value.replace(/\D/g, '').slice(0, 10);
        if (digits.length === 0) return '';
        if (digits.length < 4) return `(${digits}`;
        if (digits.length < 7) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
        return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
    }

    function onPhoneInput(event) {
        const raw = event.target.value;
        if (raw.trim().startsWith('+')) {
            phone = raw.slice(0, 16);
            return;
        }
        phone = formatPhone(raw);
    }

    function canVisit(target) {
        if (target <= step) return true;
        if (target === 2) return step1Valid;
        if (target === 3) return step1Valid && step2Valid;
        if (target === 4) return step1Valid && step2Valid && step3Valid;
        return false;
    }

    async function goTo(target) {
        if (target === step) return;

        if (target > step && !currentValid) {
            showErrors = true;
            triggerShake();
            return;
        }

        if (target > step + 1 && !canVisit(target)) return;

        direction = target > step ? 1 : -1;
        showErrors = false;
        recaptchaError = false;
        step = target;
        await tick();

        if (step === 4) {
            renderRecaptcha();
        }

        const panel = formElement?.querySelector('.step-panel.active .focus-target');
        panel?.focus();
    }

    function triggerShake() {
        shake = false;
        requestAnimationFrame(() => {
            shake = true;
            setTimeout(() => {
                shake = false;
            }, 450);
        });
    }

    function renderRecaptcha() {
        const grecaptcha = window.grecaptcha;
        if (!recaptchaReady && !grecaptcha?.render) return;
        if (!recaptchaContainer || recaptchaWidgetId !== null) return;

        try {
            recaptchaWidgetId = grecaptcha.render(recaptchaContainer, {
                sitekey: recaptcha_site_key,
                callback: () => {
                    recaptchaError = false;
                },
                'expired-callback': () => {
                    recaptchaError = true;
                }
            });
        } catch (err) {
            // Widget is already rendered from a previous visit to this step.
        }
    }

    function resetRecaptcha() {
        if (recaptchaWidgetId !== null && window.grecaptcha?.reset) {
            window.grecaptcha.reset(recaptchaWidgetId);
        }
    }

    function handleKeydown(event) {
        if (!formElement?.contains(event.target)) return;
        if (event.key !== 'Enter' || event.target.closest('textarea')) return;
        if (step < totalSteps) {
            event.preventDefault();
            goTo(step + 1);
        }
    }

    function handleSubmit(event) {
        if (step < totalSteps) {
            event.preventDefault();
            goTo(step + 1);
            return;
        }

        const token = window.grecaptcha?.getResponse?.(recaptchaWidgetId);
        if (!token) {
            event.preventDefault();
            recaptchaError = true;
            triggerShake();
        }
    }

    function startLoadingMessages() {
        const messages = ['Reading your notes…', 'Sending your assessment…', 'Almost there…'];
        let i = 0;
        loadingMessage = messages[0];
        clearInterval(loadingTimer);
        loadingTimer = setInterval(() => {
            i = Math.min(i + 1, messages.length - 1);
            loadingMessage = messages[i];
            if (i === messages.length - 1) clearInterval(loadingTimer);
        }, 750);
    }

    function resetForm() {
        username = '';
        email = '';
        phone = '';
        manual_work = '';
        current_software = '';
        biggest_problem = '';
        people_involved = '';
        budget = '';
        step = 1;
        direction = 0;
        showErrors = false;
        recaptchaError = false;
        formSuccess = false;
        formSubmissionMessage = '';
        formElement?.reset();
        resetRecaptcha();
    }

    $: if (browser && step === 4 && recaptchaReady) {
        tick().then(renderRecaptcha);
    }
</script>

<svelte:head>
	<title>Get a Free Software Assessment | Surmount</title>
	<meta name="description" content="Tell us what you are doing manually today. We'll tell you whether custom software is worth building. Free software assessment from Surmount in San Antonio, TX." />
	<link rel="canonical" href="https://getsurmount.com/contact" />
	<meta property="og:title" content="Get a Free Software Assessment | Surmount" />
	<meta property="og:description" content="Tell us what you are doing manually today. We'll tell you whether custom software is worth building." />
	<meta property="og:url" content="https://getsurmount.com/contact" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Surmount Web Services" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="Get a Free Software Assessment | Surmount" />
	<meta name="twitter:description" content="Tell us what you are doing manually today. We'll tell you whether custom software is worth building." />
</svelte:head>

<svelte:window on:keydown={handleKeydown} />

<div class="assessment-page">
    <div class="container py-4 py-lg-5">
        {#if formSuccess}
            <div class="success-wrap">
                {#if !prefersReducedMotion}
                    <div
                        class="confetti-layer"
                        use:confetti={{
                            particleCount: 120,
                            force: 0.45,
                            stageHeight: 500,
                            stageWidth: 900,
                            colors: ['#006c84', '#6eb5c0', '#ffccbb', '#FFC700']
                        }}
                    ></div>
                {/if}

                <div class="success-card">
                    <div class="success-mark" aria-hidden="true">
                        <svg viewBox="0 0 52 52">
                            <circle class="success-mark-circle" cx="26" cy="26" r="25" fill="none" />
                            <path class="success-mark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                        </svg>
                    </div>
                    <h1>Your assessment is in.</h1>
                    <p class="lead mb-4">
                        {#if firstName}{firstName}, we'll{:else}We'll{/if} read this today and get back to you with a straight answer — whether custom software is actually worth building.
                    </p>
                    <div class="success-actions">
                        <a href="https://calendly.com/brandon-surmount/intro-call" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Book a call instead</a>
                        <button type="button" class="btn btn-outline-brand" on:click={resetForm}>Send another</button>
                    </div>
                    <p class="success-note">Same-day reply on business days. No spam, no retainer pitch.</p>
                </div>
            </div>
        {:else}
            <div class="intro text-center text-lg-start mb-4 mb-lg-5">
                <p class="eyebrow">Free software assessment</p>
                <h1>Tell us what is getting in the way.</h1>
                <p class="lead mb-0">Four short questions. We'll tell you whether custom software is actually worth building. Not sure yet? See our <a href="/portfolio">work</a> or <a href="/pricing">pricing</a> first.</p>
            </div>

            {#if form?.error}
                <p class="error">{form.error}</p>
            {/if}

            <div class="assessment-layout">
                <aside class="assessment-rail" aria-label="Assessment progress">
                    <p class="rail-kicker">Takes about two minutes</p>
                    <ol class="rail-steps">
                        {#each steps as item}
                            <li>
                                <button
                                    type="button"
                                    class="rail-step"
                                    class:current={step === item.id}
                                    class:done={step > item.id}
                                    disabled={!canVisit(item.id)}
                                    on:click={() => goTo(item.id)}
                                >
                                    <span class="rail-index" aria-hidden="true">
                                        {#if step > item.id}
                                            <svg viewBox="0 0 16 16" width="14" height="14"><path d="M3 8.5l3.2 3.2L13 4.8" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                        {:else}
                                            {item.id}
                                        {/if}
                                    </span>
                                    <span>
                                        <span class="rail-label">{item.label}</span>
                                        <span class="rail-hint">{item.hint}</span>
                                    </span>
                                </button>
                            </li>
                        {/each}
                    </ol>
                    <p class="rail-note">We'll reply the same business day with a real opinion, not a sales script.</p>
                    <p class="rail-note mb-0">Already know you want to talk? <a href="https://calendly.com/brandon-surmount/intro-call" target="_blank" rel="noopener noreferrer">Book a call</a>.</p>
                </aside>

                <div class="assessment-card" class:shake>
                    {#if showOverlay}
                        <div class="card-overlay" role="status" aria-live="polite">
                            <div class="spinner" aria-hidden="true"></div>
                            <p>{loadingMessage}</p>
                        </div>
                    {/if}

                    {#if formSubmissionMessage}
                        <div class="inline-alert" role="alert">{formSubmissionMessage}</div>
                    {/if}

                    <div class="card-progress">
                        <div class="card-progress-copy">
                            <span>Step {step} of {totalSteps}</span>
                            <span class="d-none d-sm-inline">{steps[step - 1].label}</span>
                        </div>
                        <div class="progress-track" role="progressbar" aria-valuemin="1" aria-valuemax={totalSteps} aria-valuenow={step} aria-label="Assessment progress">
                            <div class="progress-fill" style="width: {progress}%"></div>
                        </div>
                    </div>

                    <form
                        bind:this={formElement}
                        method="POST"
                        novalidate
                        on:submit={handleSubmit}
                        use:enhance={() => {
                            showOverlay = true;
                            startLoadingMessages();

                            return async ({ result }) => {
                                clearInterval(loadingTimer);
                                showOverlay = false;
                                const response_data = result.data || {};
                                formSuccess = response_data.success !== false;
                                if (formSuccess) {
                                    formSubmissionMessage = '';
                                    trackEvent('generate_lead', { method: 'software_assessment' });
                                    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
                                } else {
                                    formSubmissionMessage = 'Please mark the reCAPTCHA checkbox before submitting.';
                                    recaptchaError = true;
                                    resetRecaptcha();
                                    triggerShake();
                                }
                            }
                        }}
                    >
                        <div class="step-panel" class:active={step === 1} class:enter-next={step === 1 && direction === 1} class:enter-prev={step === 1 && direction === -1} aria-hidden={step !== 1}>
                            <p class="step-kicker">Step 1</p>
                            <h2 class="step-title">Let's start with you.</h2>
                            <p class="step-copy">We'll use this to send a straight answer — not a newsletter.</p>

                            <div class="field" class:invalid={showErrors && username.trim().length < 2} class:valid={username.trim().length >= 2}>
                                <label for="username">Name</label>
                                <input
                                    class="focus-target"
                                    type="text"
                                    id="username"
                                    name="username"
                                    autocomplete="name"
                                    placeholder="Jane Perez"
                                    bind:value={username}
                                />
                                {#if showErrors && username.trim().length < 2}
                                    <p class="field-error">A name helps us know who we're writing back to.</p>
                                {/if}
                            </div>

                            <div class="field" class:invalid={showErrors && !emailValid} class:valid={emailValid}>
                                <label for="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    autocomplete="email"
                                    placeholder="jane@company.com"
                                    bind:value={email}
                                />
                                {#if showErrors && !emailValid}
                                    <p class="field-error">We need a valid email so the assessment actually reaches you.</p>
                                {/if}
                            </div>

                            <div class="field">
                                <label for="phone">Phone <span class="optional">optional</span></label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    autocomplete="tel"
                                    placeholder="(210) 555-0134"
                                    maxlength="16"
                                    value={phone}
                                    on:input={onPhoneInput}
                                />
                            </div>
                        </div>

                        <div class="step-panel" class:active={step === 2} class:enter-next={step === 2 && direction === 1} class:enter-prev={step === 2 && direction === -1} aria-hidden={step !== 2}>
                            <p class="step-kicker">Step 2</p>
                            <h2 class="step-title">{firstName ? `${firstName}, what's happening by hand?` : "What's happening by hand?"}</h2>
                            <p class="step-copy">The more specific this is, the more useful our reply will be.</p>

                            <div class="field" class:invalid={showErrors && manual_work.trim().length === 0} class:valid={manual_work.trim().length > 0}>
                                <label for="manual_work">What are you doing manually today?</label>
                                <textarea
                                    class="focus-target"
                                    id="manual_work"
                                    name="manual_work"
                                    rows="5"
                                    placeholder="Weekly scheduling in spreadsheets, copying invoices between tools, chasing parents for forms…"
                                    bind:value={manual_work}
                                ></textarea>
                                <div class="field-meta">
                                    <p class="field-hint">{manualHint}</p>
                                    <span class="char-count">{manual_work.trim().length}</span>
                                </div>
                            </div>

                            <div class="field">
                                <label for="current_software">What software do you use now? <span class="optional">optional</span></label>
                                <textarea
                                    id="current_software"
                                    name="current_software"
                                    rows="3"
                                    placeholder="Excel, QuickBooks, Procare, nothing, a mix of all three…"
                                    bind:value={current_software}
                                ></textarea>
                            </div>
                        </div>

                        <div class="step-panel" class:active={step === 3} class:enter-next={step === 3 && direction === 1} class:enter-prev={step === 3 && direction === -1} aria-hidden={step !== 3}>
                            <p class="step-kicker">Step 3</p>
                            <h2 class="step-title">Where does it hurt most?</h2>
                            <p class="step-copy">This is the part we use to decide whether software is even the right move.</p>

                            <div class="field" class:invalid={showErrors && biggest_problem.trim().length === 0} class:valid={biggest_problem.trim().length > 0}>
                                <label for="biggest_problem">What's the biggest problem?</label>
                                <textarea
                                    class="focus-target"
                                    id="biggest_problem"
                                    name="biggest_problem"
                                    rows="5"
                                    placeholder="We're double-booking jobs, billing is always late, nobody trusts the numbers…"
                                    bind:value={biggest_problem}
                                ></textarea>
                                <div class="field-meta">
                                    <p class="field-hint">{problemHint}</p>
                                    <span class="char-count">{biggest_problem.trim().length}</span>
                                </div>
                            </div>

                            <fieldset class="chip-fieldset">
                                <legend>How many people are involved? <span class="optional">optional</span></legend>
                                <div class="chip-grid">
                                    {#each peopleOptions as option}
                                        <button
                                            type="button"
                                            class="chip"
                                            class:selected={people_involved === option.value}
                                            aria-pressed={people_involved === option.value}
                                            on:click={() => people_involved = people_involved === option.value ? '' : option.value}
                                        >
                                            <span class="chip-label">{option.label}</span>
                                            <span class="chip-hint">{option.hint}</span>
                                        </button>
                                    {/each}
                                </div>
                                <input type="hidden" name="people_involved" value={people_involved} />
                            </fieldset>
                        </div>

                        <div class="step-panel" class:active={step === 4} class:enter-next={step === 4 && direction === 1} class:enter-prev={step === 4 && direction === -1} aria-hidden={step !== 4}>
                            <p class="step-kicker">Step 4</p>
                            <h2 class="step-title">Last thing — then we send it.</h2>
                            <p class="step-copy">Budget is optional. It just helps us be honest about fit.</p>

                            <fieldset class="chip-fieldset">
                                <legend>Rough budget <span class="optional">optional</span></legend>
                                <div class="chip-grid chip-grid-budget">
                                    {#each budgetOptions as option}
                                        <button
                                            type="button"
                                            class="chip"
                                            class:selected={budget === option.value}
                                            aria-pressed={budget === option.value}
                                            on:click={() => budget = budget === option.value ? '' : option.value}
                                        >
                                            <span class="chip-label">{option.label}</span>
                                            <span class="chip-hint">{option.hint}</span>
                                        </button>
                                    {/each}
                                </div>
                                <input type="hidden" name="budget" value={budget} />
                            </fieldset>

                            <div class="recaptcha-wrap" class:invalid={recaptchaError}>
                                <div bind:this={recaptchaContainer}></div>
                                {#if recaptchaError}
                                    <p class="field-error">Check the box so we know this isn't spam.</p>
                                {/if}
                            </div>
                        </div>

                        <div class="form-actions">
                            {#if step > 1}
                                <button type="button" class="btn-back" on:click={() => goTo(step - 1)}>
                                    <span aria-hidden="true">←</span> Back
                                </button>
                            {:else}
                                <span></span>
                            {/if}

                            {#if step < totalSteps}
                                <button type="button" class="btn btn-primary btn-continue" class:ready={currentValid} on:click={() => goTo(step + 1)}>
                                    Continue <span aria-hidden="true">→</span>
                                </button>
                            {:else}
                                <button type="submit" class="btn btn-primary btn-continue ready" disabled={showOverlay}>
                                    {showOverlay ? 'Sending…' : 'Get my assessment'}
                                </button>
                            {/if}
                        </div>
                    </form>
                </div>
            </div>

            <p class="mobile-calendly d-lg-none text-center mt-4 mb-0">
                Already know you want to talk? <a href="https://calendly.com/brandon-surmount/intro-call" target="_blank" rel="noopener noreferrer">Book a call</a> instead.
            </p>
        {/if}
    </div>
</div>

<style>
    .assessment-page {
        background:
            radial-gradient(1200px 400px at 10% -10%, rgba(110, 181, 192, 0.18), transparent 60%),
            radial-gradient(800px 300px at 100% 0%, rgba(255, 204, 187, 0.2), transparent 55%),
            linear-gradient(180deg, #f4fbfc 0%, #ffffff 55%);
        min-height: 70vh;
    }

    .eyebrow {
        text-transform: uppercase;
        letter-spacing: 0.12em;
        font-size: 0.75rem;
        font-weight: 700;
        color: var(--dark-green);
        margin-bottom: 0.75rem;
    }

    .intro h1,
    .success-card h1 {
        font-size: clamp(1.8rem, 3vw, 2.4rem);
        line-height: 1.2;
        margin-bottom: 0.75rem;
        overflow-wrap: break-word;
    }

    .intro .lead,
    .success-card .lead {
        color: #445;
        max-width: 38rem;
    }

    .assessment-layout {
        display: grid;
        gap: 2rem;
        align-items: start;
    }

    .assessment-rail {
        display: none;
    }

    .rail-kicker {
        font-size: 0.8rem;
        font-weight: 700;
        color: var(--dark-green);
        text-transform: uppercase;
        letter-spacing: 0.08em;
        margin-bottom: 1.25rem;
    }

    .rail-steps {
        list-style: none;
        padding: 0;
        margin: 0 0 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 0.35rem;
    }

    .rail-step {
        display: flex;
        gap: 0.85rem;
        align-items: flex-start;
        width: 100%;
        text-align: left;
        border: 0;
        background: transparent;
        padding: 0.65rem 0.5rem;
        border-radius: 12px;
        color: #667;
        transition: background 0.2s ease, color 0.2s ease;
    }

    .rail-step:disabled {
        opacity: 0.45;
        cursor: default;
    }

    .rail-step:not(:disabled):hover {
        background: rgba(0, 108, 132, 0.06);
        color: var(--dark-green);
    }

    .rail-step.current,
    .rail-step.done {
        color: var(--dark-green);
    }

    .rail-index {
        width: 28px;
        height: 28px;
        border-radius: 50%;
        border: 1.5px solid #c5d5d8;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: 0.8rem;
        font-weight: 700;
        flex-shrink: 0;
        transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease;
    }

    .rail-step.current .rail-index {
        background: var(--dark-green);
        border-color: var(--dark-green);
        color: #fff;
    }

    .rail-step.done .rail-index {
        background: var(--light-green);
        border-color: var(--dark-green);
        color: var(--dark-green);
    }

    .rail-label {
        display: block;
        font-weight: 700;
        font-size: 0.95rem;
        line-height: 1.2;
    }

    .rail-hint {
        display: block;
        font-size: 0.8rem;
        color: #7a8;
        margin-top: 0.15rem;
    }

    .rail-note {
        font-size: 0.9rem;
        color: #667;
        line-height: 1.55;
    }

    .assessment-card {
        position: relative;
        background: #fff;
        border: 1px solid rgba(0, 108, 132, 0.12);
        border-radius: 24px;
        box-shadow: 0 18px 50px rgba(0, 108, 132, 0.08);
        padding: 1.5rem 1.35rem 1.35rem;
        overflow: hidden;
    }

    .card-overlay {
        position: absolute;
        inset: 0;
        background: rgba(255, 255, 255, 0.86);
        backdrop-filter: blur(6px);
        z-index: 5;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        color: var(--dark-green);
        font-weight: 700;
    }

    .spinner {
        width: 42px;
        height: 42px;
        border-radius: 50%;
        border: 3px solid rgba(0, 108, 132, 0.15);
        border-top-color: var(--dark-green);
        animation: spin 0.8s linear infinite;
    }

    .inline-alert {
        background: #fff1f0;
        color: #9b1c1c;
        border: 1px solid #f0c2c0;
        border-radius: 12px;
        padding: 0.75rem 1rem;
        margin-bottom: 1rem;
        font-size: 0.95rem;
    }

    .card-progress {
        margin-bottom: 1.5rem;
    }

    .card-progress-copy {
        display: flex;
        justify-content: space-between;
        font-size: 0.8rem;
        font-weight: 700;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        color: var(--dark-green);
        margin-bottom: 0.5rem;
    }

    .progress-track {
        height: 6px;
        background: #e7f2f4;
        border-radius: 999px;
        overflow: hidden;
    }

    .progress-fill {
        height: 100%;
        background: linear-gradient(90deg, var(--dark-green), var(--medium-green));
        border-radius: inherit;
        transition: width 0.4s cubic-bezier(0.22, 1, 0.36, 1);
    }

    .step-panel {
        display: none;
    }

    .step-panel.active {
        display: block;
    }

    .step-panel.active.enter-next {
        animation: stepIn 0.38s cubic-bezier(0.22, 1, 0.36, 1);
    }

    .step-panel.active.enter-prev {
        animation: stepInBack 0.38s cubic-bezier(0.22, 1, 0.36, 1);
    }

    .step-kicker {
        font-size: 0.75rem;
        font-weight: 700;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: var(--medium-green);
        margin-bottom: 0.35rem;
    }

    .step-title {
        font-family: 'Montserrat', sans-serif;
        font-size: 1.45rem;
        margin-bottom: 0.4rem;
        color: #123;
    }

    .step-copy {
        color: #667;
        margin-bottom: 1.35rem;
    }

    .field {
        margin-bottom: 1.1rem;
    }

    .field label,
    .chip-fieldset legend {
        display: block;
        font-weight: 700;
        font-size: 0.92rem;
        margin-bottom: 0.4rem;
        color: #234;
    }

    .optional {
        font-weight: 500;
        color: #89a;
        font-size: 0.8rem;
    }

    .field input,
    .field textarea {
        width: 100%;
        border: 1.5px solid #d5e3e6;
        background: #fbfefe;
        border-radius: 12px;
        padding: 0.85rem 1rem;
        font-size: 1rem;
        color: #123;
        transition: border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
        outline: none;
    }

    .field textarea {
        resize: vertical;
        min-height: 96px;
    }

    .field input:focus,
    .field textarea:focus {
        border-color: var(--dark-green);
        background: #fff;
        box-shadow: 0 0 0 4px rgba(0, 108, 132, 0.12);
    }

    .field.valid input,
    .field.valid textarea {
        border-color: #8bc4b0;
    }

    .field.invalid input,
    .field.invalid textarea,
    .recaptcha-wrap.invalid {
        border-color: #d64545;
    }

    .field.invalid input,
    .field.invalid textarea {
        box-shadow: 0 0 0 4px rgba(214, 69, 69, 0.1);
    }

    .field-error {
        color: #b42318;
        font-size: 0.85rem;
        margin: 0.4rem 0 0;
    }

    .field-meta {
        display: flex;
        justify-content: space-between;
        gap: 1rem;
        margin-top: 0.4rem;
    }

    .field-hint {
        color: #6a7c80;
        font-size: 0.85rem;
        margin: 0;
    }

    .char-count {
        font-size: 0.75rem;
        color: #9aa;
        font-variant-numeric: tabular-nums;
    }

    .chip-fieldset {
        border: 0;
        padding: 0;
        margin: 0 0 1.25rem;
    }

    .chip-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0.65rem;
    }

    .chip-grid-budget .chip:last-child {
        grid-column: 1 / -1;
    }

    .chip {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.15rem;
        text-align: left;
        border: 1.5px solid #d5e3e6;
        background: #fbfefe;
        border-radius: 14px;
        padding: 0.85rem 0.95rem;
        transition: border-color 0.2s ease, background 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease;
    }

    .chip:hover {
        border-color: var(--medium-green);
        transform: translateY(-1px);
    }

    .chip:focus-visible {
        outline: 2px solid var(--dark-green);
        outline-offset: 2px;
    }

    .chip.selected {
        border-color: var(--dark-green);
        background: var(--light-green);
        box-shadow: 0 0 0 3px rgba(0, 108, 132, 0.12);
    }

    .chip-label {
        font-weight: 700;
        color: #123;
    }

    .chip-hint {
        font-size: 0.78rem;
        color: #6a7c80;
    }

    .recaptcha-wrap {
        margin: 0.5rem 0 0.25rem;
        min-height: 78px;
        border-radius: 12px;
        padding: 0.15rem;
        transform: scale(0.95);
        transform-origin: left top;
    }

    .form-actions {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
        margin-top: 1.5rem;
        padding-top: 0.25rem;
    }

    .btn-back {
        background: transparent;
        border: 0;
        color: #567;
        font-weight: 700;
        padding: 0.5rem 0;
    }

    .btn-back:hover {
        color: var(--dark-green);
    }

    .btn-continue {
        margin: 0 !important;
        min-width: 180px;
        opacity: 0.78;
        transition: transform 0.15s ease, opacity 0.2s ease, background-color 0.2s ease;
    }

    .btn-continue.ready {
        opacity: 1;
    }

    .btn-continue:hover {
        transform: translateY(-1px);
    }

    .mobile-calendly {
        color: #667;
        font-size: 0.95rem;
    }

    .success-wrap {
        position: relative;
        display: flex;
        justify-content: center;
        padding: 2rem 0 4rem;
    }

    .confetti-layer {
        position: absolute;
        left: 50%;
        top: 40px;
        pointer-events: none;
    }

    .success-card {
        position: relative;
        z-index: 1;
        max-width: 36rem;
        text-align: center;
        background: #fff;
        border: 1px solid rgba(0, 108, 132, 0.12);
        border-radius: 24px;
        box-shadow: 0 18px 50px rgba(0, 108, 132, 0.08);
        padding: 2.5rem 1.75rem;
    }

    .success-card .lead {
        margin-left: auto;
        margin-right: auto;
    }

    .success-mark {
        width: 72px;
        height: 72px;
        margin: 0 auto 1.25rem;
    }

    .success-mark svg {
        width: 72px;
        height: 72px;
        display: block;
    }

    .success-mark-circle {
        stroke: var(--dark-green);
        stroke-width: 2;
        stroke-dasharray: 166;
        stroke-dashoffset: 166;
        animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
    }

    .success-mark-check {
        stroke: var(--dark-green);
        stroke-width: 2.4;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-dasharray: 48;
        stroke-dashoffset: 48;
        animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.5s forwards;
    }

    .success-actions {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 0.5rem;
    }

    .success-note {
        margin: 1.25rem 0 0;
        color: #7a8;
        font-size: 0.9rem;
    }

    .shake {
        animation: shake 0.45s ease;
    }

    @keyframes stepIn {
        from { opacity: 0; transform: translateX(22px); }
        to { opacity: 1; transform: translateX(0); }
    }

    @keyframes stepInBack {
        from { opacity: 0; transform: translateX(-22px); }
        to { opacity: 1; transform: translateX(0); }
    }

    @keyframes spin {
        to { transform: rotate(360deg); }
    }

    @keyframes stroke {
        to { stroke-dashoffset: 0; }
    }

    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        20% { transform: translateX(-7px); }
        40% { transform: translateX(7px); }
        60% { transform: translateX(-5px); }
        80% { transform: translateX(5px); }
    }

    @media (min-width: 992px) {
        .assessment-layout {
            grid-template-columns: 240px minmax(0, 1fr);
            gap: 3rem;
        }

        .assessment-rail {
            display: block;
            position: sticky;
            top: 110px;
        }

        .assessment-card {
            padding: 2.1rem 2.25rem 1.75rem;
        }

        .chip-grid-budget {
            grid-template-columns: 1fr 1fr;
        }

        .chip-grid-budget .chip:last-child {
            grid-column: 1 / -1;
        }

        .intro .lead {
            max-width: none;
        }
    }

    @media (max-width: 575px) {
        .intro h1 {
            font-size: 1.65rem;
            line-height: 1.25;
        }

        .intro .lead {
            font-size: 1rem;
        }

        .chip-grid-budget {
            grid-template-columns: 1fr;
        }

        .form-actions {
            flex-direction: column-reverse;
            align-items: stretch;
        }

        .btn-continue {
            width: 100%;
            min-width: 0;
        }

        .btn-back {
            text-align: center;
            padding-top: 0.35rem;
        }
    }

    @media (prefers-reduced-motion: reduce) {
        .step-panel.active.enter-next,
        .step-panel.active.enter-prev,
        .shake,
        .progress-fill,
        .chip,
        .btn-continue,
        .success-mark-circle,
        .success-mark-check,
        .spinner {
            animation: none !important;
            transition: none !important;
        }
    }
</style>
