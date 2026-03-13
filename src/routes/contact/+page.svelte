<script>
    import { enhance } from '$app/forms';
    import { onMount } from 'svelte';
    export let form;

    let formElement;
    let showOverlay = false;
    let formSuccess = false;
    let showFormSubmissionMessage = false;
    let formSubmissionMessage = "";
    let response_data = "";

    let recaptcha_site_key='6LcSEMspAAAAAOl-b_fZccdnPb707gUn7olI4AF4';

    onMount(async () => {
        const script = document.createElement('script');
        script.src = 'https://www.google.com/recaptcha/api.js';
        script.async = true;
        script.defer = true;

        script.addEventListener('load', () => {
            // Google reCAPTCHA script has loaded
        });

        document.body.appendChild(script);
    });

</script>

<svelte:head>
	<title>Contact Us | Hire a Web Developer in San Antonio TX | Surmount</title>
	<meta name="description" content="Contact Surmount Web Services for a free consultation. Hire a freelance web developer in San Antonio, TX for custom websites, web apps, mobile apps, and business automation." />
	<link rel="canonical" href="https://getsurmount.com/contact" />
	<meta property="og:title" content="Contact Us | Hire a Web Developer in San Antonio TX" />
	<meta property="og:description" content="Contact Surmount Web Services for a free consultation. Custom websites, web apps, mobile apps, and business automation." />
	<meta property="og:url" content="https://getsurmount.com/contact" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Surmount Web Services" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="Contact Us | Hire a Web Developer in San Antonio TX" />
	<meta name="twitter:description" content="Contact Surmount for a free consultation. Custom websites, web apps, and business automation." />
</svelte:head>

{#if showOverlay}
    <div id="formOverlay">
        <div class="overlay-content" style="display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100vh;">
            <div class="spinner-grow text-light" role="status" style="width: 2rem; height: 2rem;">
                <span class="sr-only">Sending your message...</span>
            </div>
            <p id="loading-label">Sending your message...</p>
        </div>
    </div>
{/if}


<div class="container">
    <div class="text-center py-5">
        <h1>Let's Partner Up</h1>
        <p class="lead">Tell us about your project and we'll get back to you within 24 hours. Not sure what you need? Browse our <a href="/services">services</a>, check out our <a href="/portfolio">past work</a>, or review <a href="/pricing">pricing</a> first.</p>
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
            <p>Prefer to schedule a video call? <a href="https://calendly.com/brandon-surmount/intro-call" target="_blank" rel="noopener noreferrer">Book a free strategy call</a> instead. We serve businesses in <a href="/locations/san-antonio">San Antonio</a>, <a href="/locations/houston">Houston</a>, <a href="/locations/austin">Austin</a>, <a href="/locations/dallas">Dallas</a>, and <a href="/locations">across Texas</a>.</p>
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
                            "Your message has been sent! We'll get back to you later today." :
                            "Please mark the reCaptcha checkbox before submitting.";
                        if (formSuccess) formElement.reset();
                        window.scrollTo(0, 0);
                    }
                }}
            >
                <p class="text-muted">*All fields are required*</p>

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
                                maxlength="15" required/> 
                            <label for="phone">Phone</label>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <div class="form-floating mb-3">
                            <textarea class="form-control" id="message" name="message"
                                placeholder="Tell us about your vision" style="height: 150px" required></textarea>
                            <label for="message">Tell us about your vision</label>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <div class="form-floating mb-3">
                            <select class="form-select" style="padding-top: 12px;" name="budget" id="budget">
                                <option selected disabled value="">What's your budget?</option>
                                <option value="Less than $5,000">Less than $5,000</option>
                                <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                                <option value="$10,000 - $20,000">$10,000 - $20,000</option>
                            </select>

                            <p class="text-muted">Pricing is always negotiable</p>
                        </div>
                    </div>
                </div>

                <div class="g-recaptcha mb-3" data-sitekey={recaptcha_site_key} style="transform:scale(0.8); transform-origin:0 0"></div>

                <button type="submit" class="btn btn-primary">Submit</button>

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