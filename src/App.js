import { BrowserRouter , Route, Switch} from "react-router-dom";

import Home from './components/Home';
import Queries from './components/Queries';
import Notfound from './components/Notfound';
import Adding from "./components/Adding";
import Header  from "./components/Header";
import Exercises from "./components/Exercises";

import './App.css';

const App = () =>(
    <BrowserRouter>
    <Switch>
      <Route exact path= "/" component={Home}/>
      <Route exact path="/results" component = {Header}/>
      <Route exact path="/date" component = {Adding}/>
      <Route exact path = "/exercises" component={Exercises}/>
      <Route exact path= "/quaries" component={Queries}/>
      <Route component={Notfound}/>
    </Switch>
    </BrowserRouter>
  );


export default App;
