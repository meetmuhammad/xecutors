import React from "react";
import Image from "next/image";
import { team_data } from "../../data";
import logo from "../../../public/assets/img/logo/siteLogo.svg";
import useNHost from '../../hooks/useNHost';
import { useRouter } from "next/router";
import Cookies from 'universal-cookie';

const teams = team_data.filter((team) => team.about_p);

const TopMenu = () => {
  const cookies = new Cookies();
  const nhost = useNHost();
  const router = useRouter();
  const logOut = () => {
    cookies.remove('accessToken');
    nhost.auth.signOut();
    router.push("/login");
  }
  return (
    <div className="w-full px-[20px]">
      <div className="max-w-[1440px] w-full mx-auto shadow my-[30px] flex justify-between items-center p-[15px_30px] rounded-[20px]">
        <a className="inline-flex" href="#">
          <Image width="200" height="50" src={logo} alt="" />
        </a>

        <div className="flex items-center gap-[10px] relative">
          <div className="w-[40px] h-[40px] border rounded-full text-[#00adb5] flex items-center justify-center text-[22px]">
            <i className="fas fa-user-circle"></i>
          </div>
          <input
            id="dashboard-menu"
            className="dashboard-menu"
            type="checkbox"
          />
          <label
            className="dashboard-menu-label relative m-0 text-[#000] text-[14px] cursor-pointer"
            htmlFor="dashboard-menu"
          >
            Jhon Deo
          </label>
          <div className="dashboard-menu-dropdown w-[250px] rounded-[0_0_10px_10px] shadow-lg hidden absolute right-0 top-[60px] border bg-white z-9 p-[20px]">
            <ul className="flex flex-col gap-[10px] text-[16px] leading-normal">
              <li>
                {" "}
                <a className="hover:text-[#00adb5]" href="#">
                  My Profile
                </a>{" "}
              </li>
              <li>
                {" "}
                <a className="hover:text-[#00adb5]" href="#">
                  Setting
                </a>{" "}
              </li>
              <li>
                {" "}
                <a className="hover:text-[#00adb5]" onClick={logOut}>
                  Logout
                </a>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopMenu;
