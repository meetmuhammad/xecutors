import React from "react";
import TopMenu from '../../../components/admin/top-menu'
import EditBlogContent from "../../../components/admin/blogs/EditBlogContent";
import SideMenu from "../../../components/admin/side-menu";


const EditList = () => {
  return (
    <>
      <TopMenu />
      <div className="w-full px-[20px]">
        <div className="max-w-[1440px] w-full mx-auto flex">
          <SideMenu />
          <EditBlogContent />
        </div>
      </div>
    </>
  );
};
export default EditList;
