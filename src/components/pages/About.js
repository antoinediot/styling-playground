import React, { useEffect } from 'react';

function About() {

    useEffect(() => {
        document.title = "About This Project"
    });

    return (
        <React.Fragment>
            <header>
                <h1>About This Project</h1>
            </header>

            <article>
                <p>This sample project exists as a playground for experimenting with different styling tools and techniques.</p>

                <p>Tools used related to the subject matter:</p>
                <ul>
                    <li><a target="_blank" href="https://sass-lang.com/">SASS</a></li>
                    <li><a target="_blank" href="https://getbootstrap.com/">Bootstrap 4.3</a></li>
                </ul>

                <p>Style resources:</p>
                <ul>
                    <li><a target="_blank" href="http://smacss.com/">SMACSS</a></li>
                </ul>

                <p>Other tools used:</p>
                <ul>
                    <li><a target="_blank" href="https://reactjs.org/">React</a></li>
                    <li><a target="_blank" href="https://github.com/facebook/create-react-app">create-react-app</a></li>
                    <li><a target="_blank" href="https://github.com/ReactTraining/react-router#readme">react-router</a></li>
                </ul>

                <p>Learning Exercises</p>
                <ul>
                    <li>...</li>
                </ul>
            </article>

        </React.Fragment>
    )
}

export default About;