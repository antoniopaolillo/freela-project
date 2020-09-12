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
        <Route exact path="/en" component={Home} />
        <Route path="/clientes" component={Clients} />
        <Route path="/en/clients" component={Clients} />
        <Route path="/empresas" component={Companies} />
        <Route path="/en/companies" component={Companies} />
        <Route path="/sobre-nos" component={AboutUs} />
        <Route path="/en/about-us" component={AboutUs} />
        <Route path="/nosso-negocio" component={OurBusiness} />
        <Route path="/en/our-business" component={OurBusiness} />
        <Route path="/contato" component={Contact} />
        <Route path="/en/contact" component={Contact} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
