// import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home';
import Makes from './Makes';
import Profile from './Profile'
import Articles from './Articles'
import Privacy from './Privacy'
import { FloatingLogo } from '../Components'


export default function App() {
  return (
    <div>
      <FloatingLogo />
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/makes" component={Makes} />
          <Route path="/profile" component={Profile} />
          <Route path="/articles" component={Articles} />
          <Route path="/privacy" component={Privacy} />
          <Redirect path="*" to="/"/>
        </Switch>
      </Router>
    </div>
  );
}