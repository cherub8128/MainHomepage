import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home';
import Makes from './Makes';
import Profile from './Profile'
import Articles from './Articles'
import { FloatingLogo } from '../Components'

export default function App() {
  return (
    <div>
      <FloatingLogo />
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/makes" component={Makes} />
          <Route path="/profile" component={Profile} />
          <Route path="/articles" component={Articles} />
          <Redirect path="*" to="/"/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}