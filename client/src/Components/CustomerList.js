import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

const Customer = props=> (
    
        <tr>
            <td>{props.customer.name}</td>
            <td>{props.customer.email}</td>
            <td>{props.customer.phone}</td>
            <td>{props.customer.service}</td>
            <td>{props.customer.date.substring(0, 10)}</td>
            <td>
                <Link to={"/update"+props.customer._id}> Edit </Link>|<button onClick = {() =>{props.deleteCustomer(props.customer._id)}}>Delete</button>
            </td>
        </tr>
)


class CustomerList extends Component {
    constructor(props) {
        super(props)

        this.deleteCustomer = this.deleteCustomer.bind(this);
    
        this.state = {
             customers: []
        };

    }

    componentDidMount(){
        axios.get('http://localhost:3000/customers')
        .then(response=> {
            this.setState({customers:response.data})
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    deleteCustomer(id){
        axios.delete('http://localhost:3000/customers/'+id)
        .then(res=>console.log(res.data));
        this.setState({
            customers: this.state.customers.filter(el=>el._id !== id)
        })
    }

    CustomerList(){
        return this.state.customers.map(currentcustomer => {
            return <Customer customer={currentcustomer} deleteCustomer={this.deleteCustomer} key={currentcustomer._id} />;
        })
    }
    
    render() {
        return (
            <div className="wrapper">
                <h2 className="welcomepage">List of Customers</h2>
                <div className="nav">
                <Link to="/" className="">HOME</Link>
                <Link to="/create" className="">New Customer</Link>
                <Link to="/list" className="">Customer List</Link>
                <Link to="/addService" className="">Service Details</Link>
                </div>
                <table className = "table">
                    <thead className="thead-light">
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.CustomerList() }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default CustomerList
