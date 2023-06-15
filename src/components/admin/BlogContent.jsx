import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { team_data } from "../../data";
import logo from "../../../public/assets/img/logo/siteLogo.svg";
import { useDispatch, useSelector } from 'react-redux';
import { setBlogs } from '../../redux/features/blogs-slice';
import BlogsTable from './blogs/BlogsTable'
import BlogsPagination from './blogs/BlogPagination'
import BlogPagination from "./blogs/BlogPagination";
import Link from "next/link";
import { toast } from "react-toastify";

const teams = team_data.filter((team) => team.about_p);

const BlogContent = () => {

  const [blogsData, setBlogsData] = useState([]);
  const blogs = useSelector(state => state.blogs);
  const dispatch = useDispatch();
  const getBlogs = async () => {
    const resp = await fetch(`/api/blogs`, {
      method: "GET"
    });
    const data = await resp.json().catch((e) => console.log(e));
    console.log("blogsAPiTest", data?.blogs?.data?.blogs);
    return data?.blogs?.data?.blogs;
  }

  useEffect(() => {
    getBlogs().then((res) => {
      setBlogsData(res);
      dispatch(setBlogs(res))
    })
  }, [])


  const removeBlog = async (id) => {
    console.log('need to remove blog no.', id)
    const data = await fetch(`/api/blogs/delete`, {
      method : "POST",
      body: JSON.stringify({id})
    })

    const res = await data.json();
    console.log(res);
    if (res?.blog?.data !== undefined){
      toast.success("Blog deleted successfully");
      getBlogs().then((res) => {
        setBlogsData(res);
        dispatch(setBlogs(res))
      })
    }else {
      alert('something went wrong')
    }
  }
  return (
    <div className="w-full p-[40px] flex flex-col gap-[30px]">
      <div className="flex flex-col gap-[10px]">
        <div className="w-full flex justify-between items-center">
          <h1 className="text-[#000] m-0 text-[30px] lg:text-[40px]">
            Blog <b className="text-[#00adb5]">List</b>
          </h1>
          <Link href={'/admin/blogs/add'}>
            <button className="text-[20px] text-[#00adb5]">
              <i className="far fa-plus"></i> Add Blog
            </button>
          </Link>
        </div>
        <div className="w-full">
          <BlogsTable blogs={blogs} removeBlog={removeBlog} /> 
          <BlogPagination />
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
