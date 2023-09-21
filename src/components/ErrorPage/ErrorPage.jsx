import { NavLink } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="w-[500px] h-[300px] mt-[200px] flex justify-center items-center bg-lime-100 mx-auto rounded-3xl text-4xl font-extrabold text-emerald-400 gap-12">
            <h2>OPPs!!!!!!!</h2>
            <NavLink to='/'><button className="bg-red-600 rounded-xl text-lg font-medium p-4 text-white border shadow-xl">Go Back</button></NavLink>
        </div>
    );
};

export default ErrorPage;