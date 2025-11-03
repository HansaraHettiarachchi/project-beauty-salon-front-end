import Hero from "../components/home/Hero";
import NavBar from "../components/NavBar/NavBar";
import SpaExperience from "../components/spaExperience/SpaExperience";
import AboutUs from "../components/about/AboutUs";

export default function Home() {
    return (
        <>
            <div className="font-serif">
                <NavBar />
                <Hero />

                <SpaExperience />
                <AboutUs />


            </div>
        </>
    )
}
