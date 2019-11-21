import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";

import './styles/App.scss';

import About from './components/pages/About';
import SampleComponents from './components/pages/SampleComponents';
import SampleContent from './components/pages/SampleContent';

function App() {
  return (
    <Router>

      <div className="App">

        <nav class="global-nav">
          <ul class="nav nav-pills">
            <li class="nav-item">
              <NavLink to="/" exact activeClassName="active" className="nav-link">About</NavLink>
            </li>
            <li class="nav-item">
              <NavLink to="/content" exact activeClassName="active" className="nav-link">Content</NavLink>
            </li>
            <li class="nav-item">
              <NavLink to="/components" exact activeClassName="active" className="nav-link">Components</NavLink>
            </li>
          </ul>
        </nav>

        <div class="page-content">
          <React.Fragment>
            <Switch>
              <Route exact path={'/'} component={About} />
              <Route exact path={'/content'} component={SampleContent} />
              <Route exact path={'/components'} component={SampleComponents} />
            </Switch>
          </React.Fragment>
        </div>

      </div>

    </Router>
  );
}

export default App;
