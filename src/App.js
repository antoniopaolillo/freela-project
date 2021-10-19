import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import Athletes from './pages/Athletes';
import Home from './pages/Home';
import OurInvestiments from './pages/OurInvestments';
import OurBusiness from './pages/OurBusiness';
import OurClients from './pages/OurClients';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/athletes" component={Athletes} />
        <Route path="/investments" component={OurInvestiments} />
        <Route path="/about-us" component={AboutUs} />
        <Route path="/our-business" component={OurBusiness} />
        <Route path="/clients" component={OurClients} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
