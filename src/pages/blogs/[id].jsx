import React,{useState, useEffect} from "react";
import SEO from "../../components/seo";
import { Wrapper } from "../../layout";
import { useRouter } from "next/router";
import { blog_data } from "../../data";
import BlogDetailsMain from "../../components/blog-details";
import { useSelector } from "react-redux";

const BlogDynamicDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  // const blogs = useSelector((state) => state.blogs);
  // const blog = blogs.find((item) => Number(item.id) === Number(id));
  // console.log("blogs32212211", blogs, blog_data, blog);

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
    <Wrapper>
      <SEO pageTitle={"Blog Details"} />
      <BlogDetailsMain blog={blog} />
    </Wrapper>
  );
};

export default BlogDynamicDetails;
