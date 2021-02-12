import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import {Home, ClickGame} from './pages'

function App() {
  return ( <>
<h1>hello</h1>
<Router>
        <Route path="/Home">
            <Home></Home>
        </Route>
        <Route path="/ClickGame">
            <ClickGame></ClickGame>

        </Route>
    </Router>
  
</>
  )
};

export default App;
