import React, { Component } from 'react';

// import axios from 'axios';
import { Link } from "react-router-dom";

class CreateService extends Component {
        constructor(props){
        super(props)

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

        const services = {
            service: this.state.service,
            price: this.state.price
        }

        console.log(services);

        fetch("http://localhost:5000/services/add", {
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

        /*
        axios.post("http://localhost:5000/services/add", services)
            .then(res=> console.log(res.data));
         
        this.setState({
            service: "",
            price:""
        })
          
    }*/ 

render() {
    return (
        <div className="wrapper">
            <h2 className="welcomepage">Create New Service</h2>
            <div className="nav">
                <Link to="/" className="">HOME</Link>
                <Link to="/list" className="">Customer List</Link>
                <Link to="/addService" className="">Service Details</Link>
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
                    value={this.state.service}
                    onChange={this.onChangeService} />

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
