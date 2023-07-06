import React from "react";
import "./content4.css";
import pic1 from "../Images/edit-3.jpg";
import pic2 from "../Images/edit2-3.jpg";
import pic3 from "../Images/mobile-1.webp";

function ContentFour() {
  return (
    <>
      <section className="content-features">
        <div className="container">
          <div className="content-body">
            <div className="row">
              <div className="col-12 col-lg">
                <div className="col-text">
                  <h6>You don't have to code</h6>
                  <p>
                    Mobirise is an easy and simple free website creator - just
                    drop site elements to your page, add content and style it to
                    look the way you like.
                  </p>
                </div>
              </div>
              <div className="col-12 col-lg-7">
                <img src={pic1} width="100%" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="content-features">
        <div className="container">
          <div className="content-body">
            <div className="row">
              <div className="col-12 col-lg-7">
                <img src={pic2} width="100%" />
              </div>
              <div className="col-12 col-lg">
                <div className="col-text">
                  <h6>Make your site unique</h6>
                  <p>
                    Website Builder Software offers a huge collection of 4500+
                    website blocks, templates and themes with thousands flexible
                    options. Combine blocks from different themes to create a
                    unique mix.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="content-features">
        <div className="container">
          <div className="content-body">
            <div className="row">
              <div className="col-12 col-lg">
                <div className="col-text">
                  <h6>Automagically mobile</h6>
                  <p>
                    Mobile web traffic overtook desktop one in 2016 and will
                    only grow in 2021, and that's why it's important to create
                    websites that look good on all devices no special actions
                    required, all sites you make with the Builder are mobile-
                    friendly. You don't have to create a special mobile version
                    of your website, it will adapt automagically.
                  </p>
                </div>
              </div>
              <div className="col-12 col-lg-7">
                <img src={pic3} width="100%" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="video-section">
        <div className="container">
          <div className="section-heading-content">
            <h4>It's easy and simple</h4>
            <h5>
              Cut down the development time with drag-and-drop website builder.
              Drop the blocks into the pagr, edit content inline and publish -
              no technical skills required. Watch the video below to see the
              Mobirise in action.
            </h5>
          </div>
          <div className="row">
            <div className="col-12 col-md-10">
              <div className="image-wrapper">
                <iframe
                  src="https://www.youtube.com/embed/JIgIhgrAqGg?rel=0&amp;amp;showinfo=0&amp;autoplay=0&amp;loop=0"
                  frameborder="0"
                  width="100%"
                  height="500px"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default ContentFour;
