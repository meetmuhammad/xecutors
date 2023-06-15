import React from "react";
import BlogContent from "../../../components/admin/BlogContent";
import SideMenu from "../../../components/admin/side-menu";
import TopMenu from "../../../components/admin/top-menu";

const BlogList = () => {
  return (
    <>
      <TopMenu />
      <div className="w-full px-[20px]">
        <div className="max-w-[1440px] w-full mx-auto flex">
          <SideMenu />
          <BlogContent />
        </div>
      </div>
    </>
  );
};
export default BlogList;
