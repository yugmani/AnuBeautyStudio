import React, { Component } from 'react'
// import axios from 'axios';


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
                <button onClick = {() =>{
                    const id = prompt ('Enter id:');
                    const service = prompt('Enter service');
                    const price = prompt('Enter price:')
                    if(service){
                        
                        this.setState(state =>({
                            services: [...state.services, {id}, {service}, {price}]

                        }));
                        
                    }
                }}
                >Add Service</button>

                <ul className = "">
                    {services.map(({id, service, price}) =>(
                        <li key={id} className="">{id} | {service} | {price}
                        <button className="btn btn-danger" size="sm" 
                        onClick={()=>{
                            this.setState(state =>({
                                services: state.services.filter(service=>service.id !== id)
                            }));
                        }}
                        >&times; </button>
                        
                        </li>

                    ))}
                </ul>
            </div>
        )
    }
}

export default serviceList
