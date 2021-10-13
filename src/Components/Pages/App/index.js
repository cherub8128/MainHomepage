import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Navigation } from '../..';
import { ReactComponent as NavLogo } from './img/nav_logo.svg';
import './index.css'
import Home from '../Home';
import Makes from '../Makes';
import Profile from '../Profile'
import Articles from '../Articles'

export const App = () => {
  return (
    <div>
      <div className="logo"><NavLogo /></div>
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