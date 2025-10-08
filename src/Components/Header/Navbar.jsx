import React from "react";
import logo from "../../assets/logo.png"
import githubLogo from "../../assets/github.png"
import { Link, NavLink } from "react-router";
import { House } from "lucide-react";
import { RiAppsLine } from "react-icons/ri";
import { MdInstallMobile } from "react-icons/md";

const Navbar = () => {
  const links = (
    <>
      <Link className="m-2 mx-5 text-lg font-semibold flex gap-1"> <House size={23}></House> Home</Link>
      <Link className="m-2 mx-5 text-lg font-semibold flex gap-1 items-center"> <RiAppsLine size={23}></RiAppsLine> Apps</Link>
      <Link className="m-2 mx-5 text-lg font-semibold flex gap-1 items-center"> <MdInstallMobile></MdInstallMobile> Installation</Link>
    </>
  );

  return (
    <div className="shadow-sm bg-base-100">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost">
            <img className="w-10" src={logo} alt="" />
            <span className="text-xl font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text">HERO.IO</span></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <NavLink to={'https://github.com/sam-z-mridula'} className="btn bg-gradient-to-r from-[#632EE3] to-[#3f50eb]">
            <img src={githubLogo} alt="" />
            <span className="text-white text-md font-medium">Contribution</span></NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
