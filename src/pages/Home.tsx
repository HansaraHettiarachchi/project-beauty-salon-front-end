import Hero from "../components/home/Hero";
import NavBar from "../components/NavBar/NavBar";
import bg from "../assets/images/Salon BG-01.png";
import About from "../components/home/About";

export default function Home() {
    return (
        <>
            <div className="font-serif">
                <NavBar />
                <Hero />


                <About />


            </div>
        </>
    )
}
