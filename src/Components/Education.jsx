const Education = () => {
  return (
    <div className="container mx-auto py-[100px] ">
      <h2 className="text-3xl lg:text-5xl text-center font-bold text-black uppercase">Education</h2>
      <div className="max-w-[100px] mx-auto text-center bg-[#F72464]">
        <hr className="border-b-2 mt-4 border-[#F72464]" />
      </div>

      <div className="">
        <div className="text-center mx-auto py-[100px]">
        <ul className="steps steps-vertical md:steps-horizontal  space-y-4 ">
          <li className="step step-secondary">
            <div>
            <h2 className="text-xl font-bold">Bachelor Degree</h2>
            <p>Computer Science & Engineering</p>
            <p>Dhaka City College</p>
            <p className="font-bold text-accent text-sm">2019-Present</p>
            </div>
          </li>
          <li className="step step-accent">
          <div>
            <h2 className="text-xl font-bold">Higher Secondary Certificate </h2>
            <p>Dhaka City College</p>
            <p className="font-bold text-secondary text-sm">2017-2019</p>
            </div>
          </li>
          <li className="step step-secondary">
          <div>
            <h2 className="text-xl font-bold">Secondary School Certificate </h2>
            <p>{`St. Francis Xavier's Girls' School & College`}</p>
            <p className="font-bold text-accent text-sm">2007-2017</p>
            </div>
          </li>
         
        </ul>
        </div>
      </div>
    </div>
  );
};

export default Education;
