import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import Clients from './pages/Clients';
import Home from './pages/Home';
import Companies from './pages/Companies';
import OurBusiness from './pages/OurBusiness';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/clients" component={Clients} />
        <Route path="/companies" component={Companies} />
        <Route path="/about-us" component={AboutUs} />
        <Route path="/our-business" component={OurBusiness} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
