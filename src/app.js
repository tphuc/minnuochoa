import { Page, Text, Image, Display, Button, Grid } from '@geist-ui/react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Checkout from './ui/Checkout';
import Home from './ui/Home';
import Product from './ui/Product';
import Search from './ui/Search';

const App = () => {

  return (
      <Router>
        <Switch >
          <Route exact path='/' component={Home} />
          <Route path='/search' component={Search} />
          <Route path='/product/:id' component={Product} />
          <Route path='/checkout' component={Checkout} />
        </Switch>

      </Router>
  )
}

export default App
