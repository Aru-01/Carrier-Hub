import { NavLink } from "react-router-dom";

const Header = () => {
  const links = (
    <>
      <li><NavLink className={'text-[#757575]'} to='/'>Home</NavLink></li>
      <li><NavLink className={'text-[#7E90FE]'} to='/statistics'>Statistics</NavLink></li>
      <li><NavLink className={'text-[#757575]'} to='/applied'>Applied Jobs</NavLink></li>
      <li><NavLink className={'text-[#757575]'} to='/blogs'>Blogs</NavLink></li>
      
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-base font-medium"
            >
             {links}
            </ul>
          </div>
          <a className="text-[#1A1919] font-extrabold text-3xl">Career Hub</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-base font-medium">
           {links}
          </ul>
        </div>
        <div className="navbar-end">
          <button className="px-7 py-4 text-white bg-[#9873FF] text-lg rounded-lg font-semibold">Star Applying</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
