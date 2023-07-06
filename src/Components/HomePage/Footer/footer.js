import React from "react";
import './footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="f-statement">
                    <h3>Personal Website HTML Template. Powered by <a className="footer-link">Mobirise.com</a></h3>
                </div>
                <div className="sm-icons">
                    <ul>
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
                                <i class="fab fa-google-plus-g"></i>
                            </a>
                        </li>
                        <li>
                            <a>
                                <i class="fab fa-instagram"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;