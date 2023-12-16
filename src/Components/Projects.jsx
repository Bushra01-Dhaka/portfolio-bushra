import fithub from "../assets/icons/fitlap.png";
import telenify from "../assets/icons/telinifylap.png";
import auto from "../assets/icons/autolap.png";

const Projects = () => {
  return (
    <div className="container mx-auto py-[100px] ">
      <h2 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold text-black uppercase">
        Projects
      </h2>
      <div className="max-w-[100px] mx-auto text-center bg-[#F72464]">
        <hr className="border-b-2 mt-4 border-[#F72464]" />
      </div>
      <p className="py-6 text-center max-w-lg mx-auto px-4 lg:px-0">
        Here you will find some of the personal and clients projects that I
        created with each project containing its own case study
      </p>

      <div className="flex flex-col md:flex-row justify-center gap-6 items-center">
        {/* left */}
        <div className="flex-1">
          <img className="h-[500px] w-[500px] mx-auto" src={fithub} alt="" />
        </div>
        {/* right */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold">FitHub</h2>
          <p className="py-4">
            The web project FITHUB stands out for its holistic approach to
            fitness management, offering a seamless experience for users,
            trainers, and administrators.
          </p>

          <h2 className="text-xl font-bold">Technology Used</h2>
          <div className="grid grid-cols-3 gap-4 py-4 text-center">
            <p className="p-2 bg-rose-300 text-black font-semibold rounded-md">React</p>
            <p className="p-2 bg-rose-300 text-black font-semibold rounded-md">Mongodb</p>
            <p className="p-2 bg-rose-300 text-black font-semibold rounded-md">Express Js</p>
            <p className="p-2 bg-rose-300 text-black font-semibold rounded-md">Html</p>
            <p className="p-2 bg-rose-300 text-black font-semibold rounded-md">Css</p>
            <p className="p-2 bg-rose-300 text-black font-semibold rounded-md">Tailwind CSS</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-6 items-center">
        {/* left */}
        <div className="flex-1">
          <img className="h-[500px] w-[500px] mx-auto" src={telenify} alt="" />
        </div>
        {/* right */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold">Telenify</h2>
          <p className="py-4">
            The web project FITHUB stands out for its holistic approach to
            fitness management, offering a seamless experience for users,
            trainers, and administrators.
          </p>

          <h2 className="text-xl font-bold">Technology Used</h2>
          <div className="grid grid-cols-3 gap-4 py-4 text-center">
            <p className="p-2 bg-rose-300 text-black font-semibold rounded-md">React</p>
            <p className="p-2 bg-rose-300 text-black font-semibold rounded-md">Mongodb</p>
            <p className="p-2 bg-rose-300 text-black font-semibold rounded-md">Express Js</p>
            <p className="p-2 bg-rose-300 text-black font-semibold rounded-md">Html</p>
            <p className="p-2 bg-rose-300 text-black font-semibold rounded-md">Css</p>
            <p className="p-2 bg-rose-300 text-black font-semibold rounded-md">Tailwind CSS</p>
          </div>
        </div>
      </div>



      <div className="flex flex-col md:flex-row justify-center gap-6 items-center">
        {/* left */}
        <div className="flex-1">
          <img className="h-[500px] w-[500px] mx-auto" src={auto} alt="" />
        </div>
        {/* right */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold">AutoEdition</h2>
          <p className="py-4">
            The web project FITHUB stands out for its holistic approach to
            fitness management, offering a seamless experience for users,
            trainers, and administrators.
          </p>

          <h2 className="text-xl font-bold">Technology Used</h2>
          <div className="grid grid-cols-3 gap-4 py-4 text-center">
            <p className="p-2 bg-rose-300 text-black font-semibold rounded-md">React</p>
            <p className="p-2 bg-rose-300 text-black font-semibold rounded-md">Mongodb</p>
            <p className="p-2 bg-rose-300 text-black font-semibold rounded-md">Express Js</p>
            <p className="p-2 bg-rose-300 text-black font-semibold rounded-md">Html</p>
            <p className="p-2 bg-rose-300 text-black font-semibold rounded-md">Css</p>
            <p className="p-2 bg-rose-300 text-black font-semibold rounded-md">Tailwind CSS</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Projects;
