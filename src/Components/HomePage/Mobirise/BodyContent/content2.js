import React from "react";
import './content2.css';
import video1 from "../Videos/mbr-1.mp4";
import video2 from "../Videos/mbr-2.webm";
import video3 from "../Videos/mbr-4.webm";
import video4 from "../Videos/mbr-3.mp4";
import video5 from "../Videos/mbr-5.webm";
import video6 from "../Videos/mbr-6.mp4";
import video7 from "../Videos/mbr-7.mp4";
import video8 from "../Videos/mbr-8.webm";

function ContentTwo() {
    return(
        <>
        <section className="section-heading">
            <div className="container">
                <h3>How Mobirise works</h3>
            </div>
        </section>
        <section className="features">
            <div className="container">
                <div className="content-wrapper">
                    <div className="row">
                        <div className="col-12 col-lg">
                            <div className="text-wrapper">
                                <h6>Drag blocks to page</h6>
                                <p>Start with creating a new website and picking up the theme. Then expand the blocks
                                    panel with the big red "plus" button in the lower right corner and start dragging 
                                    the blocks you like.</p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="image-wrapper">
                                <video src={video2} src={video1} autoPlay="true" loop="true"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content-wrapper">
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <div className="image-wrapper">
                                <video src={video3} src={video4} autoPlay="true" loop="true"/>
                            </div>
                        </div>
                        <div className="col-12 col-lg">
                            <div className="text-wrapper">
                                <h6>Edit and style inline</h6>
                                <p>Edit the content of each block just like you would in a regular text editor, click on media elements to insert your own image, video or icon.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content-wrapper">
                    <div className="row">
                        <div className="col-12 col-lg">
                            <div className="text-wrapper">
                                <h6>Set block parameters</h6>
                                <p>Set the appropriate options through the Parameters Panel being brought out by the blue "gear" button.</p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="image-wrapper">
                                <video src={video5} src={video6} autoPlay="true" loop="true"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content-wrapper">
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <div className="image-wrapper">
                                <video src={video7} src={video8} autoPlay="true" loop="true"/>
                            </div>
                        </div>
                        <div className="col-12 col-lg">
                            <div className="text-wrapper">
                                <h6>Preview and publish</h6>
                                <p>Click on "Mobile View" in the website builer to check how your site looks on different devices and publish to local drive, FTP or Mobirise subdomain.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default ContentTwo;