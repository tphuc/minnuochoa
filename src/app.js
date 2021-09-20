import { Page, Text, Image, Display, Button, Grid } from '@geist-ui/react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Home from './ui/Home';
import Search from './ui/Search';

const App = () => {
  return (
    <Router>
      <Switch >
      <Route exact path='/' component={Home} />
      <Route path='/search' component={Search} />
      </Switch>
      
    </Router>
  )
}

export default App
