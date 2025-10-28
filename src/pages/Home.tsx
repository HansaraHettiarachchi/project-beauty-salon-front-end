import About from "../components/home/About";
import Hero from "../components/home/Hero";
import NavBar from "../components/NavBar/NavBar";

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
