import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import  Courses from './Components/Courses';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import './Styles/style.css';
// import './Styles/Contact.css';
import Footer from './Components/Footer';


function App() {
  return (
    <>
     <Router>
    <Header/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/About" component={About} />
        
        <Route path="/Contact" component={Contact} />
        <Route path="/Courses" component={Courses} />
        
      </Switch>
      <Footer/>
    </Router>
    
    </>
  );
}

export default App;
