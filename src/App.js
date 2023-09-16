import './App.css';

import Home from './components/Home'
import People from './components/People'
import NotFound from './components/NotFound'

import { Route, Switch,Redirect } from 'react-router-dom';

const App = () => (
<Switch>
  <Route exact path = "/" component = {Home}/>
  {/* <Route exact path = "/about" component = {About}/> */}
  <Route exact path = "/people" component = {People}/>
  <Route exact path = "/not-found" component = {NotFound}/>
  <Redirect to = "not-found"/>
</Switch>
  )

export default App;
