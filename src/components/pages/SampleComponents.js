import React, { useEffect } from 'react';

function SampleComponents() {

    useEffect(() => {
        document.title = "Sample Components"
    });

    return (
        <React.Fragment>
            <header>
                <h1 class="page-title">Sample Components</h1>
            </header>

            <div class="container">

                <article>
                    <div class="row">

                        <div class="col-md-6">
                            <h2>Alerts</h2>
                            <div class="alert alert-success" role="alert">
                                A simple success alert—check it out!
                        </div>
                            <div class="alert alert-danger" role="alert">
                                A simple danger alert—check it out!
                        </div>
                            <div class="alert alert-warning" role="alert">
                                A simple warning alert—check it out!
                        </div>
                            <div class="alert alert-info" role="alert">
                                A simple info alert—check it out!
                        </div>
                        </div>

                        <div class="col-md-6">
                            <h2>Buttons</h2>
                            <button type="button" class="btn btn-block btn-primary">Primary</button>
                            <button type="button" class="btn btn-block btn-secondary">Secondary</button>
                            <button type="button" class="btn btn-block btn-link">Link</button>

                            <button type="button" class="btn btn-primary btn-block btn-lg">Large button</button>
                            <button type="button" class="btn btn-primary btn-block btn-sm">Small button</button>
                        </div>

                        <div class="col-md-6">
                            <h2>Cards</h2>
                            <div class="card">
                                <div class="card-header">
                                    Featured
                            </div>
                                <div class="card-body">
                                    <h5 class="card-title">Special title treatment</h5>
                                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                </div>
                                <div class="card-footer">
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </article>

            </div>
        </React.Fragment>
    )
}

export default SampleComponents;