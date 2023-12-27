
import html from "../assets/icons/html.png";
import css from "../assets/icons/css.png"
import js from "../assets/icons/js.png"
import reac from "../assets/icons/react.png"
import express from "../assets/icons/express.png"
import mongo from "../assets/icons/mongo.png"
import talu from "../assets/icons/tailwind.png"
import fire from "../assets/icons/firebase.png"
import ProgressBar from "./ProgressBar";

const Skills = () => {
  return (
    <div className="container mx-auto py-[100px] bg-white text-black">

      <h2 className="animated-image pt-4 text-3xl lg:text-5xl text-center font-bold text-black uppercase">Skills</h2>
      <div className="max-w-[100px] mx-auto text-center bg-[#F72464]">
        <hr className="border-b-2 mt-4 border-[#F72464]" />
      </div>
      <div>
      <div data-aos="zoom-out" data-aos-delay="100" className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 md:max-w-4xl mx-auto pt-[100px] py-[50px] px-6 lg:px-0 text-center">
        <div>
          <div className="flex items-center gap-2">
            <img
              className="h-[50px] w-[50px] rounded-[50px]"
              src={html}
              alt=""
            />
            <h2 className="text-xl text-black">HTML</h2>
          </div>
          {/* <progress className="progress progress-accent w-56" value="80" max="100"></progress> */}
          <ProgressBar value={80}></ProgressBar>
        </div>

        <div>
          <div className="flex items-center gap-2">
            <img
              className="h-[50px] w-[50px] rounded-[50px]"
              src={css}
              alt=""
            />
            <h2 className="text-xl text-black">CSS</h2>
          </div>
          {/* <progress className="progress progress-accent w-56" value="70" max="100"></progress> */}
          <ProgressBar value={70}></ProgressBar>
        </div>

        <div>
          <div className="flex items-center gap-2">
            <img
              className="h-[50px] w-[50px] rounded-[50px]"
              src={talu}
              alt=""
            />
            <h2 className="text-xl text-black ">Tailwind CSS</h2>
          </div>
          {/* <progress className="progress progress-accent w-56" value="85" max="100"></progress> */}
          <ProgressBar value={85}></ProgressBar>
        </div> 

        {/* <div>
          <div className="flex items-center gap-2">
            <img
              className="h-[50px] w-[50px] rounded-[50px]"
              src={boot}
              alt=""
            />
            <h2 className="text-xl text-black">Bootstrap</h2>
          </div>
          
          <ProgressBar value={70}></ProgressBar>
        </div>  */}


        <div>
          <div className="flex items-center gap-2">
            <img
              className="h-[50px] w-[50px] rounded-[50px]"
              src={js}
              alt=""
            />
            <h2 className="text-xl text-black">JavaScript</h2>
          </div>
          {/* <progress className="progress progress-accent w-56" value="60" max="100"></progress> */}
          <ProgressBar value={60}></ProgressBar>
        </div>

        <div>
          <div className="flex items-center gap-2">
            <img
              className="h-[50px] w-[50px] rounded-[50px]"
              src={fire}
              alt=""
            />
            <h2 className="text-xl text-black ">Firebase</h2>
          </div>
          {/* <progress className="progress progress-accent progress-[#F72464] w-56" value="70" max="100"></progress> */}
          <ProgressBar value={70}></ProgressBar>
        </div> 

        <div>
          <div className="flex items-center gap-2">
            <img
              className="h-[50px] w-[50px] rounded-[50px]"
              src={reac}
              alt=""
            />
            <h2 className="text-xl text-black ">React</h2>
          </div>
          {/* <progress className="progress progress-accent w-56" value="65" max="100"></progress> */}
          <ProgressBar value={65}></ProgressBar>
        </div>

        <div>
          <div className="flex items-center gap-2">
            <img
              className="h-[50px] w-[50px] rounded-[50px]"
              src={express}
              alt=""
            />
            <h2 className="text-xl text-black ">Express js</h2>
          </div>
          {/* <progress className="progress progress-accent w-56" value="50" max="100"></progress> */}
          <ProgressBar value={50}></ProgressBar>
        </div>

        <div>
          <div className="flex items-center gap-2">
            <img
              className="h-[50px] w-[50px] rounded-[50px]"
              src={mongo}
              alt=""
            />
            <h2 className="text-xl text-black ">MongoDB</h2>
          </div>
          {/* <progress className="progress progress-accent w-56" value="65" max="100"></progress> */}
          <ProgressBar value={65}></ProgressBar>
        </div>

     


      </div>
      </div>

     
    </div>
  );
};

export default Skills;
