import React from 'react'
import blogimg from "../../../public/assets/img/case/CaseStudy2.jpeg";
import Image from 'next/image';
import Link from 'next/link';

const SingleBlogCard = ({blog}) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 md:p-[10px] mb-[15px] md:mb-0">
          <div className="w-full bg-white border border-[#e3e3e3] rounded-[6px] overflow-hidden">
            <div className="w-full relative">
              <Image
                className="object-cover"
                width={700}
                height={450}
                src={blogimg}
                alt=""
              />
              
            </div>

            <div className="w-full p-[15px_15px_15px_15px] md:p-[15px]">
            <ul className="flex justify-start gap-[16px] items-center mb-[16px]">
                <li className="bg-[#111111] px-[10px] py-[3px] rounded-[2px] text-white text-[14px] leading-[21px]">JavaScript</li>
                <li className="text-[#111111]  text-[14px] leading-[21px]">5 min read</li>
              </ul>
              <h3 className="text-[#000] text-[20px] md:text-[24px] mb-[10px] font-bold">
                {" "}
                <a href="#">
                {blog.title}
                </a>{" "}
              </h3>
              <p className="text-[14px] leading-normal" dangerouslySetInnerHTML={{__html: blog.description.slice(0,50)}}></p>
              <div className="w-full mb-[15px] mt-[30px]">
              <Link href={`/blogs/${blog.id}`}><a className="custom-read-btn text-[16px] text-[#111111] border border-[#111111] rounded-[4px]">
                  Read More
                </a></Link>
              </div>
              
            </div>
          </div>
        </div>
  )
}

export default SingleBlogCard