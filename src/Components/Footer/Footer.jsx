import React from "react";
import logo from "../../assets/logo.png"
import { Mail } from "lucide-react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram, FaLinkedin, FaGithub, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router";



const Footer = () => {
  return (
    <footer className=" bg-[#001931] text-white pt-10">
      <div className="footer sm:footer-horizontal container mx-auto p-5 grid grid-cols-4 border-b border-b-gray-600">
        <aside>
          <div className="flex items-center gap-3">
            <img className="w-13" src={logo} alt="" />
            <span className="text-xl font-semibold">HERO.IO</span>
          </div>
          <p>
            A leading developer of productivity solutions, delivering highly rated apps that help millions optimize their time and focus.
          </p>
        </aside>
        
        <nav className="w-fit mx-auto">
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav className="w-fit mx-auto">
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <nav className="w-fit mx-auto">
          <h6 className="footer-title">Contact Us</h6>
          <a className="link link-hover flex items-center gap-2"> <Mail size={20}></Mail> contact@hero.io</a>
          <Link className="flex items-center gap-2"> <FaPhoneAlt size={18}></FaPhoneAlt> 01322-901105 </Link>

          <h6 className="footer-title mt-5 mb-1">Follow Us</h6>
          <div className="flex items-center gap-3"> 
            <Link> <FaFacebook size={25}></FaFacebook> </Link>
            <Link> <FaInstagram size={27}></FaInstagram> </Link>
            <Link> <FaLinkedin size={25}></FaLinkedin> </Link>
            <Link> <FaGithub size={25}></FaGithub> </Link>
          </div>
        </nav>
      </div>
      <p className="w-fit mx-auto mt-5 pb-5">Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
    </footer>
  );
};

export default Footer;
