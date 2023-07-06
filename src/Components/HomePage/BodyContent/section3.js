import React from 'react';
import './section3.css';
import picture from "../Image/secondPic.jpg";

function SectionThree() {
    return (
        <div className="row section-4">
            <div className="col-lg-6 section-body">
                <div className="section4-content">
                    <h1>ABOUT ME</h1>
                    <h2>I AM A PHOTOGRAPHER & DESIGNER</h2>
                    <h3>Dedicated and energised professional photographer with 7+ years' comprehensive experience
                        in customized and also specialized photography. Experienced in catching premium quality images
                        and arranging products for photoshoots while displaying self-confidence and professionalism and
                        trust in any way times. Proficient with different kinds of photography including style, wildlife
                        and undersea due to HTML Personal Website Template. Extensive knowledge of working with innovative
                        digital photography tools.</h3>
                </div>
                <div className="container list">
                    <ul>
                        <li>Specialized in high-speed digital photography for motorsports from regional to nationwide degree series</li>
                        <li>Provided a full variety of imaging requires from commercial, also graphic arts</li>
                        <li>Designed as well as provided proposals to broad spectrum customers</li>
                        <li>Oversaw all aspects of workshop work as HTML Personal Page Template developer</li>
                    </ul>
                    <div className="section-icons">
                        <ul>
                            <li>
                                <a>
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <i class="fab fa-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <i class="fab fa-linkedin-in"></i>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <i class="fab fa-youtube"></i>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <i class="fas fa-rss"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
                <div className="col-lg-6 col-img">
                    <div className="section-img">
                        <img src={picture} width="775px" height="515px" />
                    </div>
                </div>
        </div>
    )
}
export default SectionThree;