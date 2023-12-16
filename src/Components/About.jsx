import { FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";
import img from "../assets/icons/myme.png"

const About = () => {
  return (
    <div className="container mx-auto ">
      <h2 className="text-4xl lg:text-5xl text-center font-bold text-black uppercase">About Me</h2>
      <div className="max-w-[100px] mx-auto text-center bg-[#F72464]">
        <hr className="border-b-2 mt-4 border-[#F72464]" />
      </div>
      <p className="py-6 text-center max-w-lg mx-auto px-4 lg:px-0">
        Here you will find more information about me, what I do, and my current
        skills mostly in terms of programming and technology
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center py-8 px-4 lg:px-0">
        {/* left */}
        <div className="flex-1 p-4">
        <h2 className="text-4xl  font-bold">Hi there👋</h2>
        <p className="py-6">
          I am Humayra Anjum Bushra. I am a web developer, expert in frontend
          technologies. I have strong skills in HTML, CSS, JavaScript. I have
          experience with popular libraries and frameworks like Tailwind CSS,
          Bootstrap, React as well as serverside technologies like Express,
          MongoDB. Currently I am 3rd year Computer Science and Engineering
          student in Dhaka City College.
        </p>
        <div>
            <Link><button className='btn bg-[#F72464] uppercase text-white hover:bg-[#39A7FF] border-0 shadow-lg rounded'><FaDownload></FaDownload>Download CV</button></Link>
        </div>
        </div>

        {/* right */}
        <div className="flex-1  rounded-xl  ">
            <img 
            className="w-[500px] h-[500px] shadow-mlg rounded-md mx-auto"
            src={img} alt="" />
        </div>

      </div>
    </div>
  );
};

export default About;
