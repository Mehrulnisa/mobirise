import React from "react";
import "./content1.css";

function ContentOne() {
  return (
    <div className="content1">
      <div className="container-fluid">
        <div className="row">
          <div className="card col-12 col-md-6 col-lg-4">
            <div className="card-body">
              <i class="fas fa-chart-line"></i>
              <h5>What is Mobirise?</h5>
              <p>
                Mobirise is a free offline app for Windows and Mac to easily
                create small/medium websites, landing pages, online resumes and
                portfolios. 4500+ beautiful website blocks, templates and themes
                help you to start easily.
              </p>
            </div>
          </div>
          <div className="card col-12 col-md-6 col-lg-4">
            <div className="card-body">
              <i class="fas fa-user-friends"></i>
              <h5>Who is it for?</h5>
              <p>
                Mobirise is perfect <b>for non-techies</b> who are not familiar with
                the intricacies of web design and prefer to work as visually as
                possible. Also great for pro-coders for fast prototyping and
                small customers' projects.
              </p>
            </div>
          </div>
          <div className="card col-12 col-md-6 col-lg-4">
            <div className="card-body">
              <i class="far fa-heart"></i>
              <h5>Why Mobirise?</h5>
              <p>
                Key differences from traditional website builders: Minimalistic,
                extremely <b>easy-to-use</b> interface; <b>Mobile/Google-</b>
                friendly, latest website blocks and techniques "out-the-box";{" "}
                <b>Free</b> for commercial and non-profit use
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ContentOne;
