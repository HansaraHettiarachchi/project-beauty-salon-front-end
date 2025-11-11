import AboutUsAbout from "../components/about/AboutUsAbout";
import AboutUs from "../components/home/AboutUs";
import Services from "../components/home/Services";
import SpaExperience from "../components/home/SpaExperience";
import NavBar from "../components/NavBar/NavBar";

export default function about() {
  return (
 <>
            <div className="font-serif">
                <NavBar />
                
                <AboutUsAbout/>
                <SpaExperience />
                <AboutUs />
                <Services/>


            </div>
        </>



  )
}
