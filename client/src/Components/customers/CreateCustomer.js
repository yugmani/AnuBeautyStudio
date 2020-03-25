import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import "../Header.css";

import { Link } from "react-router-dom";

class CreateCustomer extends Component {
    constructor(props){
    super(props);

            this.onChangeName = this.onChangeName.bind(this);
            this.onChangeEmail = this.onChangeEmail.bind(this);
            this.onChangePhone = this.onChangePhone.bind(this);
            this.onChangeService = this.onChangeService.bind(this);
            this.onChangeDate = this.onChangeDate.bind(this);
            this.onSubmit = this.onSubmit.bind(this);

            this.state = {
                name: "",
                email: "",
                phone: "",
                service: "",
                date: new Date(),
                // services:[]
            }
        }



    onChangeName(e) {
        this.setState({
            name : e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            email : e.target.value
        });
    }

    onChangePhone(e) {
        this.setState({
            phone : e.target.value
        });
    }

    onChangeService(e) {
        this.setState({
            service : e.target.value
        });
    }

    onChangeDate(date) {
        this.setState({
            date : date
        });
    }

    onSubmit(e) {
        e.preventDefault();

            console.log(`Form submitted`);
            console.log(`name: ${this.state.name}`);
            console.log(`email: ${this.state.email}`);
            console.log(`phone: ${this.state.phone}`);
            console.log(`service: ${this.state.service}`);
            console.log(`date: ${this.state.date}`);
        
            this.setState({
                name: "",
                email: "",
                phone: "",
                service: "",
                date: ""
            })

        
        const newCustomer = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            service: this.state.service,
            date: this.state.date
        }

        console.log(newCustomer);

        axios.post("http://localhost:5000/customers/add", newCustomer)
            .then(res=> console.log(res.data));
         
        // window.location = "/";
    }

    render() {
        return (
            <div className="wrapper">

                <h1 className="welcomepage">Create New Customer</h1>
                <div className="nav">
                    <Link to="/" className="">HOME</Link>
                    <Link to="/list" className="">Customer List</Link>
                    {/* <Link to="/checkin" className="">Add Customer</Link> */}
                    <Link to="/addService" className="">Create Service</Link>
                    <Link to="/serviceList" className="">Service List</Link>
                </div>

                <form onSubmit = {this.onSubmit}>
                    <div className = "form-group">
                        {/* <label htmlFor=''>Name</label> */}
                        Name:<br />
                        <input 
                        type="text" 
                        className="form-control" 
                        value={this.state.name}
                        placeholder="eg. Peter"
                        onChange= {this.onChangeName} />
                    </div>

                    <div className = "form-group">
                        {/* <label>Email</label> */}
                        Email:<br />
                        <input 
                        type="email" 
                        className="form-control" 
                        placeholder="eg. some@example.com"
                        value={this.state.email} 
                        onChange= {this.onChangeEmail} />
                    </div>

                    <div className = "form-group">
                        {/* <label>Phone</label> */}
                        Phone:<br />
                        <input 
                        type="Number" 
                        className="form-control"
                        placeholder="(_ _ _)  ___ - ____ " 
                        value={this.state.phone}
                        onChange= {this.onChangePhone} />
                    </div>

                    <div className = "form-group">
                        
                        Service:<br />
                        <input 
                        type="text" 
                        className="form-control" 
                        value={this.state.service}
                        onChange= {this.onChangeService} />
                    

                        {/* <select 
                        // type="text" 
                        ref="userInput" 
                        required
                        className="form-control" 
                        value={this.state.service} 
                        onChange= {this.onChangeService} >
                        {
                            this.state.services.map(function(service){
                                return <option 
                                    key = {service}
                                    value={service}>{service}
                                </option>
                            })
                        }
                        </select> */}
                    </div>

                    <div className = "form-group">
                        {/* <label>Date</label> */}
                        Date:<br />
                        <div>
                        <DatePicker 
                        selected = {this.state.date}
                        onChange= {this.onChangeDate} />
                        </div>
                    </div>

                    <div className="form-group">
                        <input 
                        type = "submit" 
                        value = "Check In" 
                        className = "btn btn-primary" />
                    </div>


                </form>
            </div>
        )
    }
}

export default CreateCustomer;

/*
<div className="form-check form-check-inline">
                            <input className="form-check-input"
                            type = "radio"
                            name="serviceOptions"
                            id="serviceThreading"
                            value="Threading"
                            checked={this.state.service === 'Threading'}
                            onChange = {this.onChangeService}
                            />
                            <label className="form-check-label">Threading</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                            type = "radio"
                            name="serviceOptions"
                            id="serviceWaxing"
                            value="Waxing"
                            checked={this.state.service === 'Waxing'}
                            onChange = {this.onChangeService}
                            />
                            <label className="form-check-label">Waxing</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                            type = "radio"
                            name="serviceOptions"
                            id="serviceFacial"
                            value="Facial"
                            checked={this.state.service === 'Facial'}
                            onChange = {this.onChangeService}
                            />
                            <label className="form-check-label">Facial</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                            type = "radio"
                            name="serviceOptions"
                            id="serviceTattoo"
                            value="Tattoo"
                            checked={this.state.service === 'Tattoo'}
                            onChange = {this.onChangeService}
                            />
                            <label className="form-check-label">Tattoo</label>
                        </div>
*/