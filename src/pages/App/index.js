import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Navigation from '../../Components/Templetes/Navigation';
import Home from '../Home';
import Makes from '../Makes';
import Profile from '../Profile'
import Articles from '../Articles'

function App() {
  return (
    <div>
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

export default App;
