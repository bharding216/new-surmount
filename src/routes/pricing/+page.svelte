<script>

</script>

<svelte:head>
	<title>Pricing</title>
	<meta name="description" content="San Antonio web developer" />
</svelte:head>

<div class="container">

    <section>
        <div class="text-center">
            <h1 class="py-5">Pricing</h1>
        </div>

        <div class="row mb-3">
            <div class="col-12 col-md-6">
                <div class="card">
                    <div class="card-header">
                        <h3 class="m-0">For Established Businesses</h3>
                    </div>

                    <div class="mx-3">
                        <p class="pt-3">Pricing is always negotiable, but here are some general prices for reference.</p>
                        <p>Specific pricing depends on many factors, such as project type, scope, design requirements, and desired turnaround time.</p>

                        <div class="table-responsive">
                            <table class="table styled-table" style="max-width: 100%;">
                                <thead>
                                    <tr>
                                        <th scope="col">Project Category</th>
                                        <th scope="col">Low End</th>
                                        <th scope="col">High End</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>Repsonsive Website</td>
                                        <td>$1,000</td>
                                        <td>$10,000</td>
                                    </tr>
                                    <tr>
                                        <td>Web Application with Database</td>
                                        <td>$5,000</td>
                                        <td>$20,000</td>
                                    </tr>

                                    <tr>
                                        <td>Production Monitoring Tools</td>
                                        <td>$5,000</td>
                                        <td>$20,000</td>
                                    </tr>

                                    <tr>
                                        <td>E-Commerce Website</td>
                                        <td>$5,000</td>
                                        <td>$20,000</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div class="text-center py-5">
                            <a href="/contact">
                                <button type="button" class="btn btn-primary">Get a custom quote</button>
                            </a> 
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-12 col-md-6 pt-3 pt-md-0">
                <div class="card">
                    <div class="card-header">
                        <h3 class="m-0">For Startups</h3> 
                    </div>

                    <div class="mx-3">
                        <p class="pt-3">
                            Depending on your idea, we'll consider building your web 
                            application for free in exchange for equity in your company.
                        </p>

                        <div class="text-center pt-3 pb-5">
                            <a href="/contact">
                                <button type="button" class="btn btn-primary">Let's talk</button>
                            </a> 
                        </div>
                    </div>
                </div>
            </div>
        </div>



    </section>
</div>


<style>
    .styled-table {
        border-collapse: collapse;
        margin: 25px 0;
        font-size: 0.9em;
        font-family: sans-serif;
        min-width: 400px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    }
    .styled-table thead tr {
        background-color: var(--dark-green);
        color: #ffffff;
        text-align: left;
    }
    .styled-table th,
    .styled-table td {
        padding: 12px 15px;
    }
    .styled-table tbody tr {
        border-bottom: 1px solid var(--medium-green);
    }
    .styled-table tbody tr:nth-of-type(even) {
        background-color: #f3f3f3;
    }
    .styled-table tbody tr:last-of-type {
        border-bottom: 2px solid var(--dark-green);
    }

</style>