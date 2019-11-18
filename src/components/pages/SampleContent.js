import React, { useEffect } from 'react';

function SampleContent() {

    useEffect(() => {
        document.title = "Sample Content"
    });

    return (

        <React.Fragment>
            <header>
                <h1>Sample Content</h1>
            </header>

            <article>

                <div class="row">

                    <div class="col-md-6">
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
            </article>

        </React.Fragment>
    )
}

export default SampleContent;