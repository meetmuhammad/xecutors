import React from 'react'
import moment from 'moment'
import Link from 'next/link'
import {toast} from 'react-toastify'

const BlogsTable = ({blogs, removeBlog}) => {


  return (
    <div className="border">
            <table className="w-full bg-white">
              <thead className="bg-[#0C3646] text-white text-[16px]">
                <tr>
                  <th className="px-[15px] py-[10px]">Title</th>
                  <th className="px-[15px] py-[10px]">Auther</th>
                  <th className="px-[15px] py-[10px]">Post Date</th>
                  <th className="w-[60px] px-[15px] py-[10px]">Action</th>
                </tr>
              </thead>
              <tbody>
                {blogs.map((blog, index) => {
                    return (
                        <tr key={index}>
                            <td className="px-[20px] py-[10px] border-b">
                                <p className="text-[16px] m-0 w-full max-w-[250px] truncate">
                                {blog.title}
                                </p>
                            </td>
                            <td className="px-[20px] py-[10px] border-b">{blog.user.displayName}</td>
                            <td className="px-[20px] py-[10px] border-b">{moment(blog.date).format('ddd MM, yyyy')}</td>
                            <td className="text-right blog-list-action relative px-[20px] py-[10px] border-b">
                                <input
                                id={`blog-action-${blog.id}`}
                                type="checkbox"
                                className="hidden"
                                />
                                <label htmlFor={`blog-action-${blog.id}`}>
                                <i className="far fa-ellipsis-v"></i>
                                </label>
                                <div className="z-[99] hidden w-[180px] absolute right-[20px] p-[15px] top-[50px] border bg-white shadow rounded flex gap-[10px] justify-end">
                                <ul className="w-full flex flex-col gap-[5px] items-start text-[#000]">
                                    <li>
                                      <Link href={`/admin/blogs/edit/${blog.id}`}>
                                        <a>
                                            <i className="text-[#00ADB5] fas fa-edit mr-[5px]"></i>{" "}
                                            Edit List
                                        </a>
                                    </Link>
                                    </li>
                                    <li>
                                    {" "}
                                    <a onClick={() => removeBlog(blog.id)} className="cursor-pointer">
                                        <i className="text-[#e93232] fas fa-trash-alt mr-[5px]"></i>{" "}
                                        Remove List
                                    </a>{" "}
                                    </li>
                                </ul>
                                </div>
                            </td>
                        </tr>
                    )
                })}

              </tbody>
            </table>
          </div>
  )
}

export default BlogsTable