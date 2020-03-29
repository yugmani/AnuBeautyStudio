import React, { Component } from 'react'
import { Link } from 'react-router-dom';

//dynamic part start
/* import axios from 'axios';


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
        axios.get('http://localhost:5000/customers')
        .then(response=> {
            this.setState({customers:response.data})
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    deleteCustomer(id){
        axios.delete('http://localhost:5000/customers/'+id)
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
} //dynamic part end
*/


class CustomerList extends Component {
   
    state = {
      
        customers: [
                {id:"1abce", name: "jenny", email:"jenny@net.net", phone: "2456542566", service:"Threading", date:"03/20/2020"},
                {id:"2edef", name: "andrew", email:"andrew@net.net", phone: "3456542568", service:"Waxing", date:"03/18/2020"},
                {id:"3uisx", name: "garry", email:"garry@net.net", phone: "4456542567", service:"Tattoo", date:"03/18/2020"},
                {id:"4eemn", name: "ribbery", email:"ribbery@net.net", phone: "7745654256", service:"Facial", date:"03/12/2020"}
        ]
    
 }
    

    render() {

        const { customers } = this.state;
        return (
            
            <div className = "wrapper">
                <h1 className="welcomepage">List of Customers</h1>
                <div className="nav">
                <Link to="/" className="">HOME</Link>
                    {/* <Link to="/list" className="">Customer List</Link> */}
                    <Link to="/checkin" className="">Add Customer</Link>
                    <Link to="/addService" className="">Create Service</Link>
                    <Link to="/serviceList" className="">Service List</Link>
                
                </div>
                
                <table className="centered">
                    <thead>
                        <tr className="listed gray-ground">
                            <td className="lefti">Name</td>
                            <td className="lefti">Email</td>
                            <td className="lefti">Phone</td>
                            <td className="lefti">Service</td>
                            <td className="lefti">Date</td>
                            <td className="lefti">Action</td>
                        </tr>
                    </thead>
                    <tbody>
                    {customers.map(({name, email, phone, service, date}) =>(
                        
                       <tr key={phone} className="listed pink-ground">
                                <td className="left">{name}</td>
                                <td className="left">{email}</td>
                                <td className="left">{phone}</td>
                                <td className="left">{service}</td>  
                                <td className="left">{date}</td>
                                <td className="left">
                                    <button className="btn btn-danger" size="sm" 
                                    onClick={()=>{
                                        this.setState(state =>({
                                            customers: state.customers.filter(customer=>customer.phone!== phone)
                                        }));
                                    }}
                                    >&times; </button>
                                </td>
                        </tr>
                        
                    ))}
                    
                    </tbody>
                   
                </table>
                </div>
        )
    }



}



export default CustomerList
