import React from "react";
import './gallery.css';

const Gallery = () => {
    return (
        <div className="gallery">
            <div className="container">
                <div className="row">
                    <div className="col-8 gallery_text">
                        <h2>Photo Gallery</h2>
                    </div>
                </div>

                {/* <div className="row class-group">
                   <div className="col-1 g-2 card">
                        <img src="/images/2.jpg" alt="image" />
                   </div>
                   <div className="col g-2 card">
                        <img src="/images/2.jpg" alt="image" />
                   </div>
                   <div className="col-md-2 card">
                        <img src="/images/flower.png" alt="image" />
                   </div>
                </div> */}

                <div class="card-columns">
                    <div class="card">
                        <img src="/images/3.jpg" className="card-img-top" alt="..." />
                    </div>
                    <div class="card">
                        <img src="/images/2.jpg" className="card-img" alt="..." />
                    </div>
                    <div class="card">
                        <img src="/images/flower.png" className="card-img" alt="..." />
                    </div>
                    <div class="card">
                        <img src="/images/2.jpg" className="card-img" alt="..." />
                    </div>
                    <div class="card">
                        <img src="/images/flower.png" className="card-img" alt="..." />
                    </div>
                    <div class="card">
                        <img src="/images/2.jpg" className="card-img" alt="..." />
                    </div>
                    <div class="card">
                        <img src="/images/2.jpg" className="card-img" alt="..." />
                    </div>
                    <div class="card">
                        <img src="/images/3.jpg" className="card-img-top" alt="..." />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Gallery;