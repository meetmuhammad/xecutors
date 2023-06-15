import React, { useEffect, useState } from "react";
import TopMenu from "../../../../components/admin/top-menu";
import EditBlogContent from "../../../../components/admin/blogs/EditBlogContent";
import SideMenu from "../../../../components/admin/side-menu";


const Editblog = () => {
    const [blog, setBlog] = useState({});
  

    const getBlog = async (id) => {
        const data = await fetch(`/api/get-single-blog`, {
            method: "POST",
            body: JSON.stringify({id})
        });
        const res = await data.json();
        return res?.blogs?.data?.blogs_by_pk;
    }

    useEffect(() => {
        const url = location.href.split('/');
        const id = url.pop();
        getBlog(id).then(blog => {
            setBlog(blog);
        });
    },[])
  return (
    <>
      <TopMenu />
      <div className="w-full px-[20px]">
        <div className="max-w-[1440px] w-full mx-auto flex">
          <SideMenu />
          <EditBlogContent blog={blog} />          
        </div>
      </div>
    </>
  );
};
export default Editblog;
