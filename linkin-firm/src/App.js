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
        <Route exact path="/en" component={Home} />
        <Route path="/atletas" component={Athletes} />
        <Route path="/en/athletes" component={Athletes} />
        <Route path="/nossos-investimentos" component={OurInvestiments} />
        <Route path="/en/our-investments" component={OurInvestiments} />
        <Route path="/sobre-nos" component={AboutUs} />
        <Route path="/en/about-us" component={AboutUs} />
        <Route path="/nosso-negocio" component={OurBusiness} />
        <Route path="/en/our-business" component={OurBusiness} />
        <Route path="/nossos-clientes" component={OurClients} />
        <Route path="/en/our-clients" component={OurClients} />
        <Route path="/contato" component={Contact} />
        <Route path="/en/contact" component={Contact} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
