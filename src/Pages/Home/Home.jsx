import About from "../../Components/About";
import Banner from "../../Components/Banner";
import Education from "../../Components/Education";
import Mailme from "../../Components/Mailme";
import Projects from "../../Components/Projects";
import Skills from "../../Components/Skills";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Education></Education>
            <Mailme></Mailme>
        </div>
    );
};

export default Home;