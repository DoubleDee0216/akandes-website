import React from "react";
import './information.css';

const Information = () => {
    return (
      <div className="wedding-details">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8 wedding__event">
                    <h2>Event Details</h2>
                    <p>Our wedding engagement and reception will be held at <i>EXCELLENT EVENT CENTER,Abeokuta</i>  located close to the Ogun state governor's office.</p>
                </div>
            </div>

            <div className="row wedding__info">
                <div className="col-md-4 wedding__infotext col-lg-3">
                    <img src="/images/round.jpg" alt="engagement"></img>
                    <h4>Engagement</h4>
                    <p>12PM West African Time</p>
                </div>
                <div className="col-md-4 wedding__infotext col-lg-3">
                    <img src="/images/round.jpg" alt="reception"></img>
                    <h4>Reception</h4>
                    <p>3PM West African Time</p>
                </div>
                <div className="col-md-4 wedding__infotext col-lg-3">
                    <img src="/images/round.jpg" alt="after party"></img>
                    <h4>After Party</h4>
                    <p>starts immediately after reception</p>
                </div>
            </div>
        </div>
      </div>  
    );
}

export default Information;