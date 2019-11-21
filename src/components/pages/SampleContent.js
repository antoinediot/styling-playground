import React, { useEffect } from 'react';

function SampleContent() {

    useEffect(() => {
        document.title = "Sample Content"
    });

    return (

        <React.Fragment>
            <header>
                <h1 class="page-title">Sample Content</h1>
            </header>

            <div class="container">

                <article class="sample-page">

                    <div class="row">

                        <div class="col-md-6">
                            <h2 class="sample-content-heading">Typography</h2>

                            <h1>Heading 1 (h1)</h1>
                            <p>Reserved for page headings. Do not use in content.</p>

                            <h2>Heading 2 (h2)</h2>
                            <ul>
                                <li>An</li>
                                <li>unordered</li>
                                <li>list</li>
                            </ul>

                            <h3>Heading 3 (h3)</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sollicitudin accumsan odio, ut lobortis est sagittis sit amet. (p)</p>
                            <ol>
                                <li>An</li>
                                <li>ordered</li>
                                <li>list</li>
                            </ol>
                        </div>

                        <div class="col-md-6">
                            <h2 class="sample-content-heading">Tables</h2>

                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Event</th>
                                        <th scope="col">Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Lunch N Learn: Docker</td>
                                        <td>Oct 22</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Hackathon: Docker</td>
                                        <td>Nov 7</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Lunch N Learn: Styling</td>
                                        <td>Nov 21</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                    
                    <div class="row">

                        <div class="col-md-6">

                            <h2 class="sample-content-heading">List Group</h2>

                            <ul class="list-group">
                                <li class="list-group-item">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </li>
                                <li class="list-group-item">
                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </article>

            </div>

        </React.Fragment>
    )
}

export default SampleContent;