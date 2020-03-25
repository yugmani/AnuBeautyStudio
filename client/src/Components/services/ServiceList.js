import React, { Component } from 'react'
import "../Header.css";

// import axios from 'axios';
import { Link } from "react-router-dom";

/*
const Service = props => (
    <tr>
        <td>{props.service.service}</td>
        <td>{props.service.price}</td>
        <td>
            <Link to={"/editService/"+props.service._id}>Edit</Link>
        </td>
    </tr>
)


class serviceList extends Component {
    
    constructor(props) {
        super(props);
    
        this.state = { services: [] };
    }

    componentDidMount(){
        // axios.get('http://localhost:5000/services/')
        //     .then(response => {
        //         this.setState({ services: response.data})
        //     })
        //     .catch(function(error){
        //         console.log(error);
        //     })
        
  
    }

    
    serviceList(){
        return this.state.services.map(function(currentService, i){
            return <Service service={currentService} key={i} />;
        });
    }
    
    render() {
        return (
            <div>
                <h3>Services List</h3>
                <table className="table table-striped" style={{ margintop: 20}}>
                    <thead>
                        <tr>
                            <th>Service</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.serviceList()}
                    </tbody>
                    
                </table>

            </div>
        )
    }
*/

    class serviceList extends Component {
    
    state = {
      
        services: [
                {id:101, service: "hair cutting", price: 45},
                {id:102, service: "shampoo", price: 35},
                {id:103, service: "nails", price: 25},
                {id:104, service: "shaving", price: 23}
        ]
    
 }
    

    render() {

        const { services } = this.state;
        
        return (
            
            <div className = "wrapper">
                <h1 className="welcomepage">Create New Service</h1>
                <div className="nav">
                <Link to="/" className="">HOME</Link>
                    <Link to="/list" className="">Customer List</Link>
                    <Link to="/checkin" className="">Add Customer</Link>
                    <Link to="/addService" className="">Create Service</Link>
                    {/* <Link to="/serviceList" className="">Service List</Link> */}
                
                </div>
                
                <table className="centered">
                    <thead>
                        <tr className="listed gray-ground">
                            <td className="lefti">ID</td>
                            <td className="lefti">Service</td>
                            <td className="lefti">Price</td>
                            <td className="lefti">Action</td>
                        </tr>
                    </thead>
                    <tbody>
                    {services.map(({id, service, price}) =>(
                        
                       <tr key={id} className="listed pink-ground">
                                <td className="left">{id}</td>
                                <td className="left">{service}</td>  
                                <td className="left">{price}</td>
                                <td className="left">
                                    <button className="btn btn-danger" size="sm" 
                                    onClick={()=>{
                                        this.setState(state =>({
                                            services: state.services.filter(service=>service.id !== id)
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

export default serviceList
