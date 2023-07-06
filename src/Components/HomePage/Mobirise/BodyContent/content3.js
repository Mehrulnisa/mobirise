import React from "react";
import './content3.css';
import Banner from "../Images/temps-3.jpg";

function ContentThree() {
    return(
        <>
        <section className="content3">
            <div className="container">
                <div className="row">
                    <div className="title col-12 col-md-10">
                        <h3>4500+ amazing blocks</h3>
                        <h4>Mobirise Creator offers 4500+ website blocks in <span className="red-clr">5 free </span> 
                            and <span className="red-clr">100+ premium HTML themes and 
                            300+ home page templates</span> that include sliders, galleries with lightbox, articles, counters, 
                            countdowns, full-screen intros, images & videos, features, data tables & pricing tables, 
                            progress bar & cycles, timelines, tabs & accordions, call-to-action, forms, Google maps, 
                            social blocks, testimonials, footers, free icons and more. Blocks are designed considering 
                            the latest web design trends, and they are flexible and full of customizing options.</h4>
                    </div>
                </div>
            </div>
        </section>
        <section className="section-image">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 lg-12">
                        <div className="img-wrapper">
                            <img src={Banner} width="100%"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="download">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-10">
                        <h2>FREE DOWNLOAD</h2>
                        <p>Mobirise Free Website Design Software is free for both personal and commercial use. 
                           Download now and use Free Website Maker for your own or client's websites without 
                           restrictions.</p>
                           <div className="download-btns">
                               <button className="window-btn">Download for Windows</button>
                               <button className="mac-btn">Download for Mac</button>
                           </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default ContentThree;