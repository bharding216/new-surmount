<script>


</script>


<div class="container">
    <div class="text-center py-5">
        <h1>Let's Partner Up</h1>
    </div>
</div>



<div class="container form-container">
    <div class="row justify-content-center pb-5">
        <div class="col-12 col-md-10 col-lg-6 form-border">
            <form method="POST">

                <div class="row">
                    <div class="col">
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="username" name="username"
                                placeholder="Name">
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
                                placeholder="Tell us about your project" style="height: 150px"></textarea>
                            <label for="message">Tell us about your project</label>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <div class="form-floating mb-5">
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


</style>