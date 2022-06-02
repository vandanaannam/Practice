import './App.css'
import Home from './Home'
import Navbar from './Navbar'
import Menu from './Menu'
import About from './About'
import Footer from './Footer'
import {BrowserRouter as Router, Route,Switch} from "react-router-dom"

function App() {
  return (
      <Router>
        <div className='app'>
      <Navbar/>
        <Switch>
        <Route exact path='/'><Home/></Route>
        <Route path='/Menu'><Menu/></Route>
        <Route path='/About'><About/></Route>
        </Switch>
        <Footer/>
        </div>
      </Router>
    
  );
}

export default App;
