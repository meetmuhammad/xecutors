import React, { useState } from "react";
import AddBlogContent from "../../../components/admin/blogs/AddBlogContent";
import SideMenu from "../../../components/admin/side-menu";
import TopMenu from "../../../components/admin/top-menu";

const AddBlog = () => {

  return (
    <>
      <TopMenu />
      <div className="w-full px-[20px]">
        <div className="max-w-[1440px] w-full mx-auto flex">
          <SideMenu />
          <AddBlogContent />
        </div>
      </div>
    </>
  );
};
export default AddBlog;
