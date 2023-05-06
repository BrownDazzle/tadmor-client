import { useState } from "react";
//import { Badge } from "@material-ui/core";
import { FaOpencart } from "react-icons/fa";

import { close, logo, menu, PngItem1 } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);



  /*.MuiBadge-anchorOriginTopRightRectangle {
    top: 0;
    right: 0;
    transform: scale(1) translate(50%, -50%);
    transform-origin: 100% 0%;
  }
  <style>
  .MuiBadge-colorPrimary {
    color: #fff;
    background-color: #3f51b5;
  }
  <style>
  .MuiBadge-badge {
    height: 20px;
    display: flex;
    padding: 0 6px;
    z-index: 1;
    position: absolute;
    flex-wrap: wrap;
    font-size: 0.75rem;
    min-width: 20px;
    box-sizing: border-box;
    transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    align-items: center;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 500;
    line-height: 1;
    align-content: center;
    border-radius: 10px;
    flex-direction: row;
    justify-content: center;
  }
  */


  return (
    <nav className="w-full flex py-6 justify-between items-center navbar ">
      <img src={PngItem1} alt="tadmor" className="w-[34px] h-[32px]" />
      <div className="flex flex-row justify-between items-center w-full ml-1">
        <h6 className="flex-1 font-poppins font-semibold ss:text-[25px] text-[12px] text-white ss:leading-[50.8px] leading-[35px]">
          Tad<span className="text-gradient">Mor</span>
        </h6>
      </div>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-dimWhite"
              } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
        <div className="font-size-[14px] cursor-pointer ml-[25] ">
          <FaOpencart className="color-white" />
        </div>
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${!toggle ? "hidden" : "flex"
            } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-dimWhite"
                  } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
