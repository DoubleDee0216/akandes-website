import React from "react";
import './Banner.css';
const Banner = () => {
    return (
        <div className="banner">
            <div className="container banner_comp">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-3 banner_text banner_text-1">
                        <h1>Omoshalewa</h1>
                        
                    </div>
                    <div className="col-md-6 banner_image">
                    </div>
                    <div className="col-md-3 banner_text banner_text-2">
                        <h1>Damilare</h1>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;