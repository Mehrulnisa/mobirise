import React from "react";
import video1 from "../Videos/top.mp4";
import video2 from "../Videos/top.webm";
import "./img.css";

function HeaderImage() {
    return(
        <div className="bg-img">
            <div className="img-overlay"></div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 col-lg-9">
                        <h1 className="img-heading">FREE WEBSITE BUILDER SOFTWARE</h1>
                        <p className="img-para">Create fast, mobile and high- ranking websites! No-code and free.</p>
                        <div className="header-btns">
                            <button className="windows">Download for Windows</button>
                            <button className="mac">Download for Mac</button>
                        </div>
                        <div className="figure">
                            <video src={video1} src={video2} autoPlay="true" loop="true" width="530px" height="293px"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderImage;