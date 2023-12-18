import { useEffect, useState } from 'react';
import { FaArrowRight, FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Banner = () => {
    const [title, setTitle] = useState("Web Developer");
  const words = ["Web ", "React ", "Frontend "];

  useEffect(() => {
    const interval = setInterval(() => {
      // Cycle through words
      const nextTitle = words[(words.indexOf(title) + 1) % words.length];
      setTitle(nextTitle);
    }, 2000); // Change every 2000 milliseconds (2 seconds)

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [title]);
    return (
        <div className=" py-[150px]">
            <div className="flex">
            <div className="md:max-w-3xl p-10 shadow-xl rounded-md">
               <div className='text-black text-3xl md:text-4xl flex flex-col space-y-8'>
                <Link to="https://www.linkedin.com/in/humayra-anjum-bushra-46b39b2a4/"><FaLinkedin className=''></FaLinkedin></Link>
                <Link to="https://github.com/Bushra01-Dhaka"><FaGithub></FaGithub></Link>
                <Link><FaTwitter></FaTwitter></Link>
                <Link to="https://www.facebook.com/profile.php?id=100078654156457&mibextid=ZbWKwL"><FaFacebook></FaFacebook></Link>
               </div>
            </div>
            
            <div className='flex-1 mx-auto flex justify-center items-center'>
                <div className='mx-auto p-4'>
                    <p className="py-4 text-center">Hey, {`It's Humayra Anjum Bushra`}</p>
                <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold uppercase text-black">{`I'm`} <span className='text-[#F72464]'>{title}</span> Developer</h1>
                <p className="py-6 md:max-w-xl mx-auto text-center">A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
                <div className='mx-auto text-center'>
                <Link><button className='btn bg-[#F72464] text-white hover:bg-[#39A7FF] border-0 shadow-lg rounded uppercase'><FaArrowRight></FaArrowRight>Explore Projects</button></Link>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Banner;