import React from "react";
import NavBar from "./Header/navbar.js";
import HeaderImage from "./Header/img";
import ContentOne from "./BodyContent/content1.js";
import ContentTwo from "./BodyContent/content2.js";
import ContentThree from "./BodyContent/content3.js";
import ContentFour from "./BodyContent/content4.js";

function Mobirise() {
  return (
    <div>
      <NavBar/>
      <HeaderImage />
      <ContentOne/>
      <ContentTwo/>
      <ContentThree/>
      <ContentFour/>
    </div>
  );
}
export default Mobirise;
