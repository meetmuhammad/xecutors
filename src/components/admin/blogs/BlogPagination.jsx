import React from 'react'

const BlogPagination = () => {
  return (
    <nav aria-label="Page navigation">
            <ul className="inline-flex mt-[25px]">
              <li>
                <a
                  href="#"
                  className="p-[12px_18px] ml-0 leading-tight text-gray-500 bg-[#fff] border border-gray-300 hover:bg-[#0C3646] rounded-l-lg hover:text-[#fff]"
                >
                  Previous
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="p-[12px_18px] leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-300 hover:text-gray-700"
                >
                  1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="p-[12px_18px] leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-300 hover:text-gray-700"
                >
                  2
                </a>
              </li>
              <li>
                <a
                  href="#"
                  aria-current="page"
                  className="p-[12px_18px] text-blue-600 border border-[#00ADB5] bg-[#00ADB5] text-white"
                >
                  3
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="p-[12px_18px] leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-300 hover:text-gray-700"
                >
                  4
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="p-[12px_18px] leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-300 hover:text-gray-700"
                >
                  5
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="p-[12px_18px] leading-tight text-gray-500 bg-[#fff] hover:bg-[#0C3646]  border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-white"
                >
                  Next
                </a>
              </li>
            </ul>
          </nav>
  )
}

export default BlogPagination