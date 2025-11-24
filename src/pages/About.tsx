

import AboutUsAbout from "../components/about/AboutUsAbout";
import BeautyandSpa from "../components/about/BeautyandSpa";
import Details from "../components/about/Details";
import OurFeature from "../components/about/OurFeature";
import OurTeam from "../components/about/OurTeam";


import NavBar from "../components/NavBar/NavBar";

export default function About() {
  return (
 <>
            <div className="font-serif">
                <NavBar />
                <AboutUsAbout/>
                <BeautyandSpa/>
                <Details/>
                <OurFeature/>
                <OurTeam/>

            </div>
        </>



  )
}
