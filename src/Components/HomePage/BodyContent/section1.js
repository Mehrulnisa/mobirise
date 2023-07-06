import React from "react";
import "./section1.css";

function SectionOne() {
  return (
    <div>
      <div className="container main-body">
        <div className="body-section">
          <div className="section-heading">
            <h2>I'M SPECIALIZED IN</h2>
          </div>
          <div className="line"></div>
          <div className="section-para">
            <p>
              Committed and energetic professional photographer with 7+ years'
              extensive experience in custom-made and specialized photography
            </p>
          </div>
        </div>
        <div className="row paras-section">
          <div className="col-lg-3 col-md-6">
            <div className="para">
              <div className="icon">
                <i class="fas fa-edit"></i>
              </div>
              <h3>CONCEPTING</h3>
              <p>
                Creative digital photographer, passionate about digital
                photography of several kinds, variations, acquired more than 7
                years professional photography experience in HTML Template
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="para">
              <div className="icon">
                <i class="fas fa-money-check"></i>
              </div>
              <h3>UI/UX</h3>
              <p>
                Worked full time with the US Army, as a participant of the
                Personnel division, yet finished my time using HTML Resume
                Template, operating in the logistics area
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="para">
              <div className="icon">
                <i class="far fa-images"></i>
              </div>
              <h3>VISUAL DESIGN</h3>
              <p>
                Oversaw all aspects of workshop job as simple HTML resume
                developer and organisation administration consisting of
                economic, imaginative and also customer service processes
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="para">
              <div className="icon">
                <i class="far fa-thumbs-up"></i>
              </div>
              <h3>INTERACTION</h3>
              <p>
                Familiar with various kinds of photography consisting of
                fashion, wild animals and undersea due to HTML Resume Template
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="row-content">
          <div className="col-md-3 row-box">
            <div className="box">
              <i class="fas fa-users"></i>
              <h4>Clients</h4>
              <h3>37</h3>
            </div>
          </div>
          <div className="col-md-3 row-box box-clr">
            <div className="box1">
              <i class="fas fa-rocket"></i>
              <h4>Aworde Winner</h4>
              <h3>13</h3>
            </div>
          </div>
          <div className="col-md-3 row-box">
            <div className="box box-color">
              <i class="far fa-clock"></i>
              <h4>Hours Worked</h4>
              <h3>900</h3>
            </div>
          </div>
          <div className="col-md-3 row-box">
            <div className="box1">
              <i class="fas fa-magic"></i>
              <h4>Project Completed</h4>
              <h3>40</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SectionOne;
