import React from 'react';
import "./Header.css";
import Eyebrow from "./images/threading.jpg";
import Facial from "./images/facialwaxing.jpg";
import Waxing from "./images/waxinglegs.jpg";
import Tattoo from "./images/henna-tattoo.jpg";

function Amenities() {

    
    return (
        <div id = "Services" className="wrapper">
            <h1 className="welcomepage">SERVICES </h1>
            <div className="flex">
                    
                <div className="card" style={{width: "18rem"}}>
                    <img src={Facial} className="card-img-top" alt="facial" />
                    <div className="card-body">
                        <h3 className="card-title">Facial</h3>
                        <p>(faciales)</p>
                        <p className="card-text">Facial</p>
                        {/* <a href="#" className="btn btn-primary">More info...</a> */}
                    </div>
                </div>
                <div className="card" style={{width: "18rem"}}>
                    <img src={Eyebrow} className="card-img-top" alt="eyebrow" />
                    <div className="card-body">
                        <h3 className="card-title">Threading</h3>
                        <p>(depilaciones)</p>
                        <p className="card-text">Eyebrow & Threading</p>
                        {/* <a href="#" className="btn btn-primary">More info...</a> */}
                    </div>
                </div>  
                <div className="card" style={{width: "18rem"}}>
                    <img src={Waxing} className="card-img-top" alt="waxing" />
                    <div className="card-body">
                        <h3 className="card-title">Waxing Serivce</h3>
                        <p>(Waxing Servicio)</p>
                        <p className="card-text">Waxing Service</p>
                        {/* <a href="#" className="btn btn-primary">More info...</a> */}
                    </div>
                </div>
                <div className="card" style={{width: "18rem"}}>
                    <img src={Tattoo} className="card-img-top" alt="tattoo" />
                    <div className="card-body">
                        <h3 className="card-title">Henna Tattoo</h3>
                        <p>(Tatuaje De Henna)</p>
                        <p className="card-text">Henna Tattoo</p>
                        {/* <a href="#" className="btn btn-primary">More info...</a> */}
                    </div>
                </div>
            </div>       
        </div>
    )
}

export default Amenities
