import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';


class EditCustomer extends Component {
    constructor(props){
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeService = this.onChangeService.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        name:"",
        email:"",
        phone:0,
        service:"",
        date:new Date(),
        services:[]
    }
}


componentDidMount(){
    axios.get("http://localhost:3000/customers/"+this.props.match.params.id)
        .then(response=>{
            this.setState({
                name:response.data.name,
                email:response.data.email,
                phone:response.data.phone,
                service:response.data.service,
                date:response.data.date,
            })
        })
        .catch(error =>{
            console.log(error);
        })



   axios.get("http://localhost:3000/services")
        .then(response =>{
            if (response.data.length > 0){
                this.setState({
                    services : response.data.map(service=> service.service),
                   
                })
                console.log(response.data);
            }
        })

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

        const customer = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            service: this.state.service,
            date: this.state.date
        }

        console.log(customer);

        axios.post("http://localhost:3000/customers/update"+this.match.params.id, customer)
            .then(res=> console.log(res.data));
         
        window.location = "/";
    }

    render() {
        return (
            <div>
                <h1>Edit Customer</h1>
                <form onSubmit = {this.onSubmit}>
                    <div className = "form-group">
                        {/* <label htmlFor=''>Name</label> */}
                        Name:<br />
                        <input 
                        type="text" 
                        className="form-control" 
                        value={this.state.name}
                        onChange= {this.onChangeName} />
                    </div>

                    <div className = "form-group">
                        {/* <label>Email</label> */}
                        Email:<br />
                        <input 
                        type="email" 
                        className="form-control" 
                        value={this.state.email} 
                        onChange= {this.onChangeEmail} />
                    </div>

                    <div className = "form-group">
                        {/* <label>Phone</label> */}
                        Phone:<br />
                        <input 
                        type="number" 
                        className="form-control" 
                        value={this.state.phone}
                        onChange= {this.onChangePhone} />
                    </div>

                    <div className = "form-group">
                        {/* <label>Service</label> */}
                        Service:<br />
                        <select 
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
                        </select>
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
                        value = "Edit Customer" 
                        className = "btn btn-primary" />
                    </div>


                </form>
            </div>
        )
    }
}

export default EditCustomer;
