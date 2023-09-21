import { GoLocation } from "react-icons/go";
import { BiDollarCircle } from "react-icons/bi";

const Job = ({ job }) => {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <div>
      <div className="card card-compact border border-[#E8E8E8] shadow-sm pl-5">
        <figure className="flex justify-start pt-12">
          <img src={logo} alt={company_name} />
        </figure>
        <div className="card-body">
          <h2 className="text-[#474747] font-extrabold text-2xl">
            {job_title}
          </h2>
          <p className="text-[#757575] font-semibold text-xl">{company_name}</p>
          <div className="my-2">
            <button className="text-base font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#7E90FE] to-[#9873FF] border border-[#7E90FE] px-5 py-2 mr-4">
              {remote_or_onsite}
            </button>
            <button className="text-base font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#7E90FE] to-[#9873FF]  border border-[#7E90FE] px-5 py-2 mr-4">
              {job_type}
            </button>
          </div>
          <div className="my-2 flex text-xl gap-6 font-semibold text-[#757575]">
            <div className="flex items-center gap-1">
              <GoLocation></GoLocation>
              <p>{location}</p>
            </div>
            <div className="flex items-center gap-1">
              <BiDollarCircle></BiDollarCircle>
              <p>Salary: {salary}</p>
            </div>
          </div>
          <div className="card-actions my-2">
            <button className="text-white text-base font-extrabold px-4 py-2 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] rounded">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
