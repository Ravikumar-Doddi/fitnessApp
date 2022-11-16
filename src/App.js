import { BrowserRouter , Route, Routes} from "react-router-dom";

import Home from './components/Home';
import Queries from './components/Queries';
import Notfound from './components/Notfound';
import Adding from "./components/Adding";

import Exercises from "./components/Exercises";

import './App.css';

const App = () =>(
    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path="/results" element = {<Notfound/>}/>
      <Route path="/date" element = {<Adding/>}/>
      <Route path="/exercises" element = {<Exercises/>}/>
      <Route path="/quaries" element = {<Queries/>}/>
      <Route element = {<Notfound/>}/>
    </Routes>
    </BrowserRouter>
  );


export default App;
