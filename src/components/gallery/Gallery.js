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
                        <img src="/images/DSC_1151.jpg" alt="image" />
                   </div>
                   <div className="col g-2 card">
                        <img src="/images/DSC_1159.jpg" alt="image" />
                   </div>
                   <div className="col-md-2 card">
                        <img src="/images/flower.png" alt="image" />
                   </div>
                </div> */}

                <div class="card-columns gallery__images">
                    <div class="card">
                        <img src="/images/1.jpg" className="card-img-top" alt="..." />
                    </div>
                    <div class="card">
                        <img src="/images/8.jpg" className="card-img" alt="..." />
                    </div>
                    <div class="card">
                        <img src="/images/3.jpg" className="card-img" alt="..." />
                    </div>
                    <div class="card">
                        <img src="/images/new9.jpg" className="card-img" alt="..." />
                    </div>
                    <div class="card">
                        <img src="/images/6.jpg" className="card-img" alt="..." />
                    </div>
                    <div class="card">
                        <img src="/images/new10.jpg" className="card-img" alt="..." />
                    </div>
                    <div class="card">
                        <img src="/images/new7.jpg" className="card-img" alt="..." />
                    </div>
                    <div class="card">
                        <img src="/images/recep1.jpg" className="card-img" alt="..." />
                    </div>
                    <div class="card">
                        <img src="/images/2.jpg" className="card-img-top" alt="..." />
                    </div>
                    <div class="card">
                        <img src="/images/new5.jpg" className="card-img" alt="..." />
                    </div>
                    <div class="card">
                        <img src="/images/new1.jpg" className="card-img" alt="..." />
                    </div>
                    <div class="card">
                        <img src="/images/new2.jpg" className="card-img" alt="..." />
                    </div>
                    <div class="card">
                        <img src="/images/new3.jpg" className="card-img" alt="..." />
                    </div>
                    <div class="card">
                        <img src="/images/4.jpg" className="card-img" alt="..." />
                    </div>
                    <div class="card">
                        <img src="/images/new4.jpg" className="card-img" alt="..." />
                    </div>
                    <div class="card">
                        <img src="/images/7.jpg" className="card-img-top" alt="..." />
                    </div>
                    <div class="card">
                        <img src="/images/new6.jpg" className="card-img" alt="..." />
                    </div>
                    <div class="card">
                        <img src="/images/9.jpg" className="card-img-top" alt="..." />
                    </div>
                    <div class="card">
                        <img src="/images/tee.jpg" className="card-img-top" alt="..." />
                    </div>
                    <div class="card">
                        <img src="/images/teemah.jpg" className="card-img-top" alt="..." />
                    </div>
                    <div class="card">
                        <img src="/images/eng1.jpg" className="card-img-top" alt="..." />
                    </div>
                    <div class="card">
                        <img src="/images/eng2.jpg" className="card-img-top" alt="..." />
                    </div>
                    <div class="card">
                        <img src="/images/eng3.jpg" className="card-img-top" alt="..." />
                    </div>
                    <div class="card">
                        <img src="/images/eng4.jpg" className="card-img-top" alt="..." />
                    </div>
                    <div class="card">
                        <img src="/images/eng5.jpg" className="card-img-top" alt="..." />
                    </div>
                    <div class="card">
                        <img src="/images/eng6.jpg" className="card-img-top" alt="..." />
                    </div>
                    <div class="card">
                        <img src="/images/eng7.jpg" className="card-img-top" alt="..." />
                    </div>
                    <div class="card">
                        <img src="/images/eng8.jpg" className="card-img-top" alt="..." />
                    </div>
                    <div class="card">
                        <img src="/images/engbride.jpg" className="card-img-top" alt="..." />
                    </div>
                    <div class="card">
                        <img src="/images/engcouple.jpg" className="card-img-top" alt="..." />
                    </div>
                    <div class="card">
                        <img src="/images/enggroom (1).jpg" className="card-img-top" alt="..." />
                    </div>
                    <div class="card">
                        <img src="/images/men.jpg" className="card-img-top" alt="..." />
                    </div>
                    <div class="card">
                        <img src="/images/pp1.jpg" className="card-img-top" alt="..." />
                    </div>
                    <div class="card">
                        <img src="/images/pp2.jpg" className="card-img-top" alt="..." />
                    </div>
                    <div class="card">
                        <img src="/images/pp3.jpg" className="card-img-top" alt="..." />
                    </div>
                    <div class="card">
                        <img src="/images/pp4.jpg" className="card-img-top" alt="..." />
                    </div>
                    <div class="card">
                        <img src="/images/pp5.jpg" className="card-img-top" alt="..." />
                    </div>
                    <div class="card">
                        <img src="/images/ss5.jpg" className="card-img-top" alt="..." />
                    </div>
                    <div class="card">
                        <img src="/images/ss4.jpg" className="card-img-top" alt="..." />
                    </div>
                    <div class="card">
                        <img src="/images/ss1.jpg" className="card-img-top" alt="..." />
                    </div>
                    <div class="card">
                        <img src="/images/ss2.jpg" className="card-img-top" alt="..." />
                    </div>
                    <div className="card">
                        <img src="/images/ss3.jpg" className="card-img-top" alt="..." />
                    </div>
                        
                    </div>
                </div>
        </div>
    );
}

export default Gallery;