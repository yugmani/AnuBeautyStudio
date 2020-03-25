import React, { Component } from 'react';

import axios from 'axios';
import { Link } from "react-router-dom";

class CreateService extends Component {
        constructor(props){
        super(props);

        this.onChangeService = this.onChangeService.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            service: "",
            price: ""
                }
        }

        
    onChangeService(e) {
        this.setState({
            service : e.target.value
        });
    }

    onChangePrice(e) {
        this.setState({
            price : e.target.value
        });
    }


    onSubmit(e) {
        e.preventDefault();
    
            console.log(`Form submitted`);
            console.log(`Service: ${this.state.service}`);
            console.log(`Price: ${this.state.price}`);

            this.setState({
                service: "",
                price: ""
            })

            const newServices = {
                service: this.state.service,
                price: this.state.price
            }


            
        console.log(newServices);

        /* fetch("http://localhost:5000/services/add", {
            method: "get",
            headers: {
              'Content-Type': 'application/json',
            },
            //body: JSON.stringify(data),
          }).then((response) => response.json())
            .then((data) => {
              console.log('Success:', data);
            })
          window.location = "/";
        }
        */

        
        axios.post("http://localhost:5000/services/add", newServices)
            .then(res=> console.log(res.data));
         
     }

render() {
    return (
        <div className="wrapper" style={{marginTop: 20}}>

            <h2 className="welcomepage">Create New Service</h2>
            <div className="nav">
            <Link to="/" className="">HOME</Link>
                    <Link to="/list" className="">Customer List</Link>
                    <Link to="/checkin" className="">Add Customer</Link>
                    {/* <Link to="/addService" className="">Create Service</Link> */}
                    <Link to="/serviceList" className="">Service List</Link>
                
            </div>

            <form onSubmit={this.onSubmit}>

                <div className="form-group">
                    Service:<br />
                    <input type="text"
                    required
                    className="form-control"
                    value={this.state.service}
                    onChange={this.onChangeService} />
                </div>

                <div className="form-group">
                    Price:<br />
                    <input type="Number"
                    required
                    className="form-control"
                    value={this.state.price}
                    onChange={this.onChangePrice} />

                </div>
                <div className="form-group">
                    <input type="submit"
                    value="Create Service"
                    className="btn btn-primary" />
                </div>
            </form>
        </div>
    )
}

}

export default CreateService;
