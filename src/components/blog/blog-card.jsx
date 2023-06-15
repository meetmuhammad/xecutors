import React, { useEffect, useState } from "react";
import Image from "next/image";
import blogimg from "../../../public/assets/img/case/CaseStudy2.jpeg";
import BlogSlider from "./blog-slider";
import PageLoader from "../common/Page-Loader";
import SingleBlogCard from "./SingleBlogCard";

const BlogCard = () => {
  const [blogs,setBlogs] = useState([])
  const [latestBlogs, setLatestBlogs] = useState([])


  useEffect(() => {
    getBlogs();
  },[])

  const getBlogs = async () => {
    const data = await fetch('/api/blogs');
    const res = await data.json();
    const blogs = res?.blogs?.data?.blogs.reverse();
    const latestBlogs = blogs.slice(0,3);
    setLatestBlogs(latestBlogs);
    setBlogs(blogs);
  }
  return (
    <div className="w-full py-[50px] px-[20px] bg-[#f8f8f8]">
      {/* <PageLoader /> */}
      <div className="max-w-[1280px] w-full mx-auto flex flex-wrap">

        <div className="w-full flex flex-col gap-[40px]">
          <div className="w-full flex flex-col gap-[16px]">
            <h2 className="text-[65px] text-[#111111] leading-[76px] m-0 font-black">News and insights</h2>
            <p className="max-w-[935px] text-[18px] leading-[27px] m-0">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
          </div>

          <div className="w-full flax flex-col mb-[50px] mt-[40px]">
            <h4 className="text-[36px] text-[#111111] text-center font-bold mb-[26px]">Articles</h4>
            <BlogSlider latestBlogs={latestBlogs} />
            
          </div>
        </div>
        {blogs && blogs.map((blog, i) =>  <SingleBlogCard blog={blog} key={i} /> )}

        <div className="w-full px-[10px] my-[50px] flex justify-center">
          <a className="flex justify-center text-[18px] py-[10px] rounded-[6px] px-[30px] bg-[#00ADB5] text-white leading-[38px] font-bold" href="#">View More</a>
        </div>
        {/* <div className="w-full flex flex-col gap-[40px]">
          <div className="w-full flex flex-col gap-[18px]">
            <h2 className="w-[80%] text-[52px] leading-[59px] text-[#353535] m-0 font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
            <ul className="flex gap-[10px] items-center text-[16px] text-[#172B4D]">
              <li> <Image
                className="object-cover border"
                width={40}
                height={40}
                src={blogimg}
                alt=""
              /> </li>

              <li> <span className="mr-[5px] font-bold">By</span> Jordan Mirchev</li>
              <li>|</li>
              <li>Published on</li>
              <li>|</li>
              <li>November 14, 2022</li>
              <li>|</li>
              <li>2 min read</li>
            </ul>
          </div>

          <div className="w-full relative">
              <Image
                className="object-cover"
                width={1500}
                height={600}
                src={blogimg}
                alt=""
              />
            </div>

            <div className="w-full flex flex-col gap-[20px] items-start">
              <p className="text-[16px] text-[#000] m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales.</p>
              <p className="text-[16px] text-[#000] m-0">Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet.</p>
              <p className="text-[16px] text-[#000] m-0">Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.</p>

              <button className="text-[26px] text-[#000] font-bold">See more</button>

            </div>

            <div className="w-full flex flex-col">
              <span className="text-[16px] text-[#42526E] mb-[60px] flex">Popular Posts</span>

              <div className="w-full flex flex-col gap-[30px]">
                <div className="w-full flex gap-[100px]">
                  <div className="w-full flex flex-col gap-[30px]">
                    <div className="w-full flex gap-[10px] items-center">
                      <h2 className="max-w-[150px] w-full text-center text-[96px] leading-[33px] text-[#D7D7D7] font-black">01</h2>
                      <div className="w-full flex gap-[15px] border-b pb-[20px]">
                      <div className="max-w-[80px] w-full relative">
                        <Image
                          className="object-cover"
                          width={80}
                          height={80}
                          src={blogimg}
                          alt=""
                        />
                      </div>

                      <div className="w-full flex flex-col">
                        <span className="m-0 text-[#42526E] text-[11px] leading-[21px] uppercase">Product</span>
                        <p className="max-w-[209px] w-full m-0 text-[20px] text-[#172B4D] leading-[24px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      </div>
                      </div>
                    </div>

                    <div className="w-full flex gap-[10px] items-center">
                      <h2 className="max-w-[150px] w-full text-center text-[96px] leading-[33px] text-[#D7D7D7] font-black">02</h2>
                      <div className="w-full flex gap-[15px] border-b pb-[20px]">
                      <div className="max-w-[80px] w-full relative">
                        <Image
                          className="object-cover"
                          width={80}
                          height={80}
                          src={blogimg}
                          alt=""
                        />
                      </div>

                      <div className="w-full flex flex-col">
                        <span className="m-0 text-[#42526E] text-[11px] leading-[21px] uppercase">Product</span>
                        <p className="max-w-[209px] w-full m-0 text-[20px] text-[#172B4D] leading-[24px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full flex flex-col gap-[30px]">
                    <div className="w-full flex gap-[10px] items-center">
                      <h2 className="max-w-[150px] w-full text-center text-[96px] leading-[33px] text-[#D7D7D7] font-black">03</h2>
                      <div className="w-full flex gap-[15px] border-b pb-[20px]">
                      <div className="max-w-[80px] w-full relative">
                        <Image
                          className="object-cover"
                          width={80}
                          height={80}
                          src={blogimg}
                          alt=""
                        />
                      </div>

                      <div className="w-full flex flex-col">
                        <span className="m-0 text-[#42526E] text-[11px] leading-[21px] uppercase">Product</span>
                        <p className="max-w-[209px] w-full m-0 text-[20px] text-[#172B4D] leading-[24px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      </div>
                      </div>
                    </div>

                    <div className="w-full flex gap-[10px] items-center">
                      <h2 className="max-w-[150px] w-full text-center text-[96px] leading-[33px] text-[#D7D7D7] font-black">04</h2>
                      <div className="w-full flex gap-[15px] border-b pb-[20px]">
                      <div className="max-w-[80px] w-full relative">
                        <Image
                          className="object-cover"
                          width={80}
                          height={80}
                          src={blogimg}
                          alt=""
                        />
                      </div>

                      <div className="w-full flex flex-col">
                        <span className="m-0 text-[#42526E] text-[11px] leading-[21px] uppercase">Product</span>
                        <p className="max-w-[209px] w-full m-0 text-[20px] text-[#172B4D] leading-[24px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <div className="w-full p-[30px] bg-[#000000] items-center rounded-[22px] flex flex-col gap-[25px] mt-[30px]">
              <p className="max-w-[297px] w-full mx-auto text-center text-white text-[24px] font-normal m-0">Get More Done Together With US</p>
              <p className="max-w-[313px] w-full mx-auto text-center text-white m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <a className="bg-[#353535] text-white py-[8px] px-[17px] rounded-full text-[14px]" href="#">Get Started</a>
            </div>
        </div> */}
      </div>
    </div>
  );
};

export default BlogCard;
