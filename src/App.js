import './App.css';
import {useState} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './Pages';
import SigninPage from './Pages/Signin'
import Sidebar from './components/Sidebar'
// import NavBar from './components/NavBar'
import Footer from './components/Footer'
// import MembersPage from './Pages/MembersPage';
import TempleTownsPage from './Pages/TempleTownsPage';
import TopBar from './components/TopBar';
import Members from './components/Members'

function App(props) {    const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
   setIsOpen(!isOpen)   
  }
  console.log("App Props : ", props)
  return (
      <Router>
        <Sidebar isOpen={isOpen} toggle={toggle}/>  
        <TopBar toggle={toggle}/>
          <Route path="/" exact component={Home}/>
          <Route path="/signin" component={SigninPage} exact />
          {/* <Route path="/members/:Id" component={Members}  /> */}
          <Route path="/members/:Id" render={(props)=><Members {...props} />} />
          <Route path='/templetowns' component={TempleTownsPage} exact />
          <Route path="/services" exact component={Home} />
        <Footer />
      </Router>

  );
}

export default App;
