import Hero from "../components/home/Hero";
import NavBar from "../components/NavBar/NavBar";
import SpaExperience from "../components/home/SpaExperience";
import AboutUs from "../components/about/AboutUs";
import Services from "../components/services/Services";

export default function Home() {
    return (
        <>
            <div className="font-serif">
                <NavBar />
                <Hero />

                <SpaExperience />
                <AboutUs />
                <Services/>


            </div>
        </>
    )
}
