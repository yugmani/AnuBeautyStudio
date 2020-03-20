import React from 'react';
import "./Components/Header.css";

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Header from "./Components/Header";
import Amenities from "./Components/Amenities";
import Testimonials from "./Components/Testimonials";
import Contact from './Components/Contact';
import Footer from "./Components/Footer";

import CustomerList from "./Components/CustomerList";
import EditCustomer from "./Components/EditCustomer";
import CreateCustomer from "./Components/CreateCustomer";
import CreateService from "./Components/CreateService";
// import serviceList from './Components/serviceList';



function App() {
  return (
    <div >
      <Router>
                <Switch>
                <Route path="/list" exact component = {CustomerList} />
                <Route path="/edit:id" exact component = {EditCustomer} />
                <Route path="/create" exact component = {CreateCustomer} />
                <Route path="/addService" exact component = {CreateService} />
                {/* <Route path = "/addService" exact component = {serviceList} /> */}

                <Route path="/" exact component = {Header} />
                <Route path="/Amenities" exact component = {Amenities} />
                <Route path="/Testimonials" exact component = {Testimonials} />
                <Route path="/Contact" exact component = {Contact} />
              
                <Route path="/Footer" exact component = {Footer} />
                </Switch>
                
        </Router>
        
    </div>
  );
}

export default App;
