import React from 'react'
import Link from 'next/link'

const BlogSliderCard = ({blog}) => {
  return (
    <div className="w-full bg-white rounded-[22px] p-[60px] flex flex-col items-center gap-[40px] mb-[20px]">
        <ul className="flex justify-center gap-[16px] items-center">
                <li className="bg-[#111111] px-[10px] py-[3px] rounded-[2px] text-white text-[14px] leading-[21px]">JavaScript</li>
                <li className="text-[#111111]  text-[14px] leading-[21px]">5 min read</li>
        </ul>

        <h3 className="text-[40px] font-bold text-[#111111] text-[48px] text-center m-0">{blog.title}</h3>
        <p className="text-[16px] text-[#111111] leading-[24px] max-w-[1000px] w-full mx-auto" dangerouslySetInnerHTML={{__html: blog.description.slice(0,40)}}></p>
        <Link href={`/blogs/${blog.id}`}><a className="custom-read-btn text-[16px] text-[#111111] border border-[#111111] rounded-[4px] m-0">Read more</a></Link>
    </div>
  )
}

export default BlogSliderCard