<script>
    import { enhance } from '$app/forms';
    import { onMount } from 'svelte';
    import { trackEvent } from '$lib/analytics';
    export let form;

    let formElement;
    let showOverlay = false;
    let formSuccess = false;
    let showFormSubmissionMessage = false;
    let formSubmissionMessage = "";

    let recaptcha_site_key='6LcSEMspAAAAAOl-b_fZccdnPb707gUn7olI4AF4';

    onMount(async () => {
        const script = document.createElement('script');
        script.src = 'https://www.google.com/recaptcha/api.js';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
    });

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

{#if showOverlay}
    <div id="formOverlay">
        <div class="overlay-content" style="display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100vh;">
            <div class="spinner-grow text-light" role="status" style="width: 2rem; height: 2rem;">
                <span class="sr-only">Sending your assessment...</span>
            </div>
            <p id="loading-label">Sending your assessment...</p>
        </div>
    </div>
{/if}


<div class="container">
    <div class="text-center py-5">
        <h1>Get a Free Software Assessment</h1>
        <p class="lead">Tell us what you are doing today. We'll tell you whether custom software is actually worth building. Not sure yet? See our <a href="/portfolio">work</a> or <a href="/pricing">pricing</a> first.</p>
    </div>
</div>

{#if showFormSubmissionMessage}
    <div class="container pb-3 px-5">
        <div class={formSuccess ? 'alert alert-success' : 'alert alert-danger'} role="alert">
            {formSubmissionMessage}
        </div>
    </div>
{/if}

{#if form?.error}
    <p class="error">{form.error}</p>
{/if}

<div class="container form-container">
    <div class="row justify-content-center mb-4">
        <div class="col-12 col-md-10 col-lg-6 text-center">
            <p>Already know you want to talk? <a href="https://calendly.com/brandon-surmount/intro-call" target="_blank" rel="noopener noreferrer">Book a call</a> instead.</p>
        </div>
    </div>
    <div class="row justify-content-center pb-5">
        <div class="col-12 col-md-10 col-lg-6 form-border">
            <form 
                bind:this={formElement}
                method="POST" 
                use:enhance={() => {
                    showOverlay = true

                    return async ({ result }) => {
                        const response_data = result.data || {};
                        showOverlay = false;
                        showFormSubmissionMessage = true;
                        formSuccess = response_data.success !== false;
                        formSubmissionMessage = formSuccess ?
                            "Your assessment is in. We'll get back to you later today." :
                            "Please mark the reCaptcha checkbox before submitting.";
                        if (formSuccess) {
                            formElement.reset();
                            trackEvent('generate_lead', { method: 'software_assessment' });
                        }
                        window.scrollTo(0, 0);
                    }
                }}
            >
                <p class="text-muted">Name, email, and the problem fields are required. Phone is optional.</p>

                <div class="row">
                    <div class="col">
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="username" name="username"
                                placeholder="Name" required>
                            <label for="username">Name</label>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control" id="email" name="email" 
                                placeholder="Email" required>
                            <label for="email">Email</label>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <div class="form-floating mb-3">
                            <input type="tel" class="form-control" name="phone" id="phone" placeholder="Phone" 
                                maxlength="15"/> 
                            <label for="phone">Phone (optional)</label>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <div class="form-floating mb-3">
                            <textarea class="form-control" id="manual_work" name="manual_work"
                                placeholder="What are you doing manually today?" style="height: 120px" required></textarea>
                            <label for="manual_work">What are you doing manually today?</label>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <div class="form-floating mb-3">
                            <textarea class="form-control" id="current_software" name="current_software"
                                placeholder="What software do you use now?" style="height: 90px"></textarea>
                            <label for="current_software">What software do you use now?</label>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <div class="form-floating mb-3">
                            <textarea class="form-control" id="biggest_problem" name="biggest_problem"
                                placeholder="What's the biggest problem?" style="height: 120px" required></textarea>
                            <label for="biggest_problem">What's the biggest problem?</label>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="people_involved" name="people_involved"
                                placeholder="How many people are involved?">
                            <label for="people_involved">How many people are involved?</label>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <div class="form-floating mb-3">
                            <select class="form-select" style="padding-top: 12px;" name="budget" id="budget">
                                <option selected disabled value="">Rough budget (optional)</option>
                                <option value="Under $10,000">Under $10,000</option>
                                <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                                <option value="$25,000 - $75,000">$25,000 - $75,000</option>
                                <option value="$75,000+">$75,000+</option>
                                <option value="Not sure yet">Not sure yet</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="g-recaptcha mb-3" data-sitekey={recaptcha_site_key} style="transform:scale(0.8); transform-origin:0 0"></div>

                <button type="submit" class="btn btn-primary">Get my assessment</button>

            </form>
        </div>
    </div>
</div>


<style>
	.form-border {
		border-radius: 20px; 
		border: 1px solid black;
		box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.2);
        padding: 40px;
        background-color: rgb(249, 248, 255);
	}

    @media (max-width: 768px) {
        .form-container {
            padding-left: 30px;
            padding-right: 30px;
        }
    }

    #formOverlay {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
        z-index: 1080;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #loading-label {
        color: #fff;
        font-size: 2em;
        font-weight: bold;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }


</style>
