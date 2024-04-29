<script>
    import { enhance } from '$app/forms';
    import { onMount } from 'svelte';
    export let form;

    let formElement;
    let showOverlay = false;
    let formSuccess = false;
    let formSuccessMessage = "";

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
    </div>
</div>

{#if formSuccess}
    <div class="container pb-3 px-5">
        <div class="alert alert-success" role="alert">
            {formSuccessMessage}
        </div>
    </div>
{/if}

{#if form?.error}
    <p class="error">{form.error}</p>
{/if}

<div class="container form-container">
    <div class="row justify-content-center pb-5">
        <div class="col-12 col-md-10 col-lg-6 form-border">
            <form 
                bind:this={formElement}
                method="POST" 
                use:enhance={() => {
                    showOverlay = true

                    return async ({ result }) => {
                        if (result.type === "success") {
                            showOverlay = false;
                            formSuccess = true;
                            formSuccessMessage = "Your message has been sent! We'll get back to you later today.";
                            formElement.reset();
                        }
                    }
                }}
            >

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
                            <input type="email" class="form-control" id="email" name="email" placeholder="Email">
                            <label for="email">Email</label>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <div class="form-floating mb-3">
                            <input type="tel" class="form-control" name="phone" id="phone" placeholder="Phone" maxlength="15"/> 
                            <label for="phone">Phone</label>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <div class="form-floating mb-3">
                            <textarea class="form-control" id="message" name="message"
                                placeholder="Tell us about your vision" style="height: 150px"></textarea>
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

                            <p class="text-muted">Pricing is always negotiable!</p>
                        </div>
                    </div>
                </div>

                <div class="g-recaptcha mb-3" data-sitekey={recaptcha_site_key}></div>

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