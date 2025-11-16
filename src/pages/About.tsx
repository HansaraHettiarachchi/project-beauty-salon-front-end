

import AboutUsAbout from "../components/about/AboutUsAbout";
import BeautyandSpa from "../components/about/BeautyandSpa";
import OurFeatures from "../components/about/OurFeature";

import NavBar from "../components/NavBar/NavBar";

export default function About() {
  return (
 <>
            <div className="font-serif">
                <NavBar />
                <AboutUsAbout/>
                <BeautyandSpa/>
               <OurFeatures/>


            </div>
        </>



  )
}
