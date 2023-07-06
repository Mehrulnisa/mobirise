import React from "react";
import NavBar from "../HomePage/Header/navbar";
import Image from "../HomePage/Header/img";
import SectionOne from "../HomePage/BodyContent/section1";
import SectionTwo from "../HomePage/BodyContent/section2";
import SectionThree from "../HomePage/BodyContent/section3";
import Footer from "../HomePage/Footer/footer";

function HomePage() {
  return (
    <div>
      <NavBar />
      <Image />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <Footer />
    </div>
  );
}
export default HomePage;
