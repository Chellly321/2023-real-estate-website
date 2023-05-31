import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import FirstPage from './pages/home1/FirstPage';
import Home from './pages/home2/Home';
import Listings from './pages/Listings';
import SXMEdge from './pages/SxmEdge';
import Contact from './pages/Contact';
import Aboutus from './pages/Aboutus';
import Navbar from './components/Navbar';
import NavbarHome from './components/NavbarHome';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <FirstPage />
        </Route>
        <Route path='/home'>
          <NavbarHome />
          <Home />
        </Route>
        <Route path='/listings'>
          <Navbar />
          <Listings />
        </Route>
        <Route path='/sxmedge'>
          <Navbar />
          <SXMEdge />
        </Route>
        <Route path='/contact'>
          <Navbar />
          <Contact />
        </Route>
        <Route path='/aboutus'>
          <Navbar />
          <Aboutus />
        </Route>
      </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
