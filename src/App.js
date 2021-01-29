import './App.css';
import Home from './components/Home'
import Destinations from './components/Destinations'
import Partner from './components/Partner'
import About from './components/About'
import Navigation from './components/Navigation'


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faChevronRight, faStar } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faChevronRight, faStar)

function App() {
  return (
    
      <Router>
      <Navigation />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/destinations" component={Destinations} />
        <Route path="/partner" component={Partner} />
        <Route path="/about" component={About} />

        <Route path="*" component={Error} />
      </Switch>
    </Router>
    
  );
}

export default App;
