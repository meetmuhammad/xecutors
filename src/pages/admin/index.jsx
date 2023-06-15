import React from "react";
import DashboardContent from "../../components/admin/content";
import SideMenu from "../../components/admin/side-menu";
import TopMenu from "../../components/admin/top-menu";
import AdminAuth from '../../components/admin/auth/AdminAuth';

const index = () => {
  return (
    <>
      <AdminAuth>
        <TopMenu />
        <div className="w-full px-[20px]">
          <div className="max-w-[1440px] w-full mx-auto flex">
            <SideMenu />
            <DashboardContent />
          </div>
        </div>
      </AdminAuth>
    </>
  );
};
export default index;
