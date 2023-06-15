import React from "react";
import Image from "next/image";
import { team_data } from "../../data";
import logo from "../../../public/assets/img/logo/siteLogo.svg";
import Link from "next/link";

const teams = team_data.filter((team) => team.about_p);

const SideMenu = () => {
  return (
    <div className="min-h-[600px] rounded-[20px] border p-[30px] dashboard-sidemenu">
      <input className="hidden" id="expend-sidemenu" type="checkbox" />
      <label
        className="w-[35px] h-[35px] text-center text-[#fff] text-[20px] cursor-pointer hidden lg:block"
        htmlFor="expend-sidemenu"
      >
        <i className="far fa-bars"></i>
      </label>
      <ul className="dashboard-nav w-[35px] lg:w-[250px] flex flex-col gap-[30px] text-[20px] mt-[50px] text-[#fff]">
        <li className="hover:text-[#00adb5] relative">
          {" "}
          <a className="whitespace-nowrap" href="#">
            <i className="w-[35px] h-[35px] text-[16px] bg-[#00adb5] rounded-full text-center fas fa-tachometer-alt-average text-[#fff] mr-[10px]"></i>{" "}
            <span className="opacity-1">Dashboard</span>
          </a>{" "}
        </li>
        <li className="hover:text-[#00adb5]">
          {" "}
          <a className="whitespace-nowrap" href="#">
            <i className="w-[35px] h-[35px] text-[16px] bg-[#00adb5] rounded-full text-center fas fa-file-user text-[#fff] mr-[10px]"></i>{" "}
            <span className="opacity-1">Account</span>
          </a>{" "}
        </li>
        <li className="hover:text-[#00adb5]">
          {" "}
          <a className="whitespace-nowrap" href="#">
            <i className="w-[35px] h-[35px] text-[16px] bg-[#00adb5] rounded-full text-center fas fa-wallet text-[#fff] mr-[10px]"></i>{" "}
            <span className="opacity-1">Billing</span>
          </a>{" "}
        </li>

        <li className="hover:text-[#00adb5] relative">
          <a href="#">
            
          </a>
          <Link className="whitespace-nowrap cursor-pointer w-full" href={'/admin/blogs'}>
            <a>
            <i className="w-[35px] h-[35px] text-[16px] bg-[#00adb5] rounded-full text-center fas fa-cubes text-[#fff] mr-[10px]"></i>{" "}
            <span className="opacity-1">Blogs</span>
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideMenu;
