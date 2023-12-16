import { Link } from "react-router-dom";

const Mailme = () => {
    return (
        <div className="py-[50px]">
            <div className="mx-auto text-center">
                 <h1 className="text-3xl lg:text-4xl px-4 lg:px-0 font-bold">Do you have any project ideas? Wanna Collaborate with me?</h1>
                 <p className="py-6">I’m always open to discussing product design work or partnership opportunities.</p>
                 <div>
                    <Link><button className="btn bg-[#F72464] uppercase text-white hover:bg-[#39A7FF] border-0 shadow-lg rounded">Send me mail</button></Link>
                 </div>

            </div>
        </div>
    );
};

export default Mailme;