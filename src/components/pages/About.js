import React, { useEffect } from 'react';

function About() {

    useEffect(() => {
        document.title = "About This Project"
    });

    return (
        <React.Fragment>
            <header>
                <h1 class="page-title">About This Project</h1>
            </header>

            <div class="container">

                <article>
                    <h2>Project Description</h2>
                    <p>This sample project exists as a playground for experimenting with different styling tools and techniques.</p>

                    <h2>Tools Used</h2>
                    <p>Tools used related to the subject matter:</p>
                    <ul>
                        <li><a target="_blank" href="https://sass-lang.com/">SASS</a></li>
                        <li><a target="_blank" href="https://getbootstrap.com/">Bootstrap 4.3</a></li>
                    </ul>

                    <p>Other Tools Used:</p>
                    <ul>
                        <li><a target="_blank" href="https://reactjs.org/">React</a></li>
                        <li><a target="_blank" href="https://github.com/facebook/create-react-app">create-react-app</a></li>
                        <li><a target="_blank" href="https://github.com/ReactTraining/react-router#readme">react-router</a></li>
                    </ul>

                    <p>Additional Learning Resources:</p>
                    <ul>
                        <li><a target="_blank" href="http://smacss.com/">SMACSS</a></li>
                    </ul>

                    <h2>Learning Exercises</h2>
                    <ul class="list-group">

                        <li class="list-group-item">
                            <p>Remove the bottom margin of the last element in the list group items.</p>
                            <p><em>Use the <code>:list-child</code> selector and the <code>element>element</code> selector.</em></p>
                            <p><a target="_blank" href="https://www.w3schools.com/cssref/sel_last-child.asp">:last-child selector</a></p>
                            <p><a target="_blank" href="https://www.w3schools.com/cssref/sel_element_gt.asp">element>element selector</a></p>
                        </li>

                        <li class="list-group-item">
                            <p>Eliminate the duplicate <code>.page-content</code> selector in the scaffolding file.</p>
                            <p><em>Use nesting.</em></p>
                            <p><a target="_blank" href="https://sass-lang.com/documentation/style-rules#nesting">SASS Nesting</a></p>
                        </li>

                        <li class="list-group-item">
                            <p>Use variables to set the background of the navigation section background and page title background.</p>
                            <p><em>Create new variables file and add variables.</em></p>
                            <p><a target="_blank" href="https://sass-lang.com/documentation/variables">SASS Variables</a></p>
                        </li>

                        <li class="list-group-item">
                            <p>Set the color of the page title background as a function of the navigation section background.</p>
                            <p><em>Set the variable using SASS <code>lighten</code> function.</em></p>
                            <p><a target="_blank" href="https://sass-lang.com/documentation/modules/color">SASS Color Module</a></p>
                        </li>

                        <li class="list-group-item">
                            <p>Consolidate the padding definition for the navigation section and the page title.</p>
                            <p><em>Create a new mixin file and add a mixin.</em></p>
                            <p><a target="_blank" href="https://sass-lang.com/documentation/at-rules/mixin">SASS Mixins</a></p>
                        </li>

                        <li class="list-group-item">
                            <p>Set responsive horizontal padding for navigation secton and page title (15px for xs and sm, 30px for md and lg, 50px for xl), using mobile-first pattern.</p>
                            <p><em>Use media queries as specified by Bootstrap.</em></p>
                            <p><a target="_blank" href="https://getbootstrap.com/docs/4.3/layout/overview/#responsive-breakpoints">Bootstrap Responsive Breakpoints</a></p>
                        </li>

                        <li class="list-group-item">
                            <p>Eliminate inclusion of unused Bootstrap components.</p>
                            <p><em>Use and update a copy bootstrap root SCSS file</em></p>
                        </li>

                        <li class="list-group-item">
                            <p>Make the components more rounded.</p>
                            <p><em>Override the bootstrap variable specifies border radius for components.</em></p>
                        </li>

                        <li class="list-group-item">
                            <p>Set the bottom margin of headings to be 3/4 the size of the standard spacer as defined by Bootstrap.</p>
                            <p><em>Override the heading margin bottom variable using SASS numeric operators to compute the value.</em></p>
                            <p><a target="_blank" href="https://sass-lang.com/documentation/operators/numeric">SASS Numeric Operators</a></p>
                        </li>

                        <li class="list-group-item">
                            <p>Create a new stylesheet for a dark theme.</p>
                            <p><em>Copy site root SCSS file and update variables to apply inverted colors.</em></p>
                        </li>
                    </ul>
                </article>

            </div>

        </React.Fragment>
    )
}

export default About;