import React from "react";
import Image from "next/image";
import { team_data } from "../../data";
import logo from "../../../public/assets/img/logo/siteLogo.svg";

const teams = team_data.filter((team) => team.about_p);

const DashboardContent = () => {
  return (
    <div className="w-full p-[40px] flex flex-col gap-[30px]">
      <div className="flex flex-col gap-[10px]">
        <h1 className="text-[#000] m-0 text-[30px] lg:text-[40px]">
          Welcome <b className="text-[#00adb5]">Dashboard</b>
        </h1>
        <p className="m-0">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
        </p>
      </div>
    </div>
  );
};

export default DashboardContent;
