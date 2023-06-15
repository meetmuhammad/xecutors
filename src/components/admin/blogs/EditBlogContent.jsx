import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
// import Editor from "../../common/Editor"



const EditBlogContent = ({blog}) => {

  const editorRef = useRef(null);
  const log = (e) => {
    e.preventDefault();
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  const router = useRouter();
  const [blogData, setBlogData] = useState({
    title: "",
    description: "",
    image: "",
    userName: ""
  })

  const handleBlogData = (e) => {
    const {name, value} = e.target;
    setBlogData({...blogData, [name]: value})
  }

  const saveBlog = async (e) => {
    e.preventDefault();
    console.log('data', blogData);
    const finalData = {
      title: blogData.title,
      description: editorRef.current.getContent(),
      image: blogData.image
    }
    const data = await fetch(`/api/blogs/update`, {
      method: "POST",
      body: JSON.stringify({...finalData, id: blog.id})
    })

    const res = await data.json();
    console.log('edit', res);
    if(res.blog?.errors !== undefined){
      toast.error(res?.blog?.errors[0].message);
    }else if(res?.blog?.data?.update_blogs_by_pk !== null){
      toast.success("Blog updated successfully");
      router.push('/admin/blogs');
    }else{
      toast.error("Something went wrong!");
    }
  }

  useEffect(() => {
    console.log('now you can set value');
    setBlogData({
      title: blog.title,
      description: blog.description,
      image: blog.image,
      userName: blog?.user?.displayName
    })
  }, [blog])



  return (
    <div className="w-full pt-[20px] p-[40px] flex flex-col gap-[30px]">
      <div className="flex flex-col gap-[10px]">
        <h1 className="text-[#000] m-0 text-[30px] lg:text-[40px]">
          Edit <b className="text-[#00adb5]">Blog</b>
        </h1>
      </div>

      <div className="w-full pb-[30px] pt-[20px]">
        <form className="w-full flex flex-wrap" action="">
          <div className="w-[100%]">
            <div className="cursor-pointer upload-img w-full h-[280px] bg-[#f7f7f7] rounded-[10px] mb-[20px] flex flex-col gap-[20px] justify-center items-center">
              <input id="fileUpload" type="file" className="hidden" />
              <label
                htmlFor="fileUpload"
                className="w-[150px] h-[150px] bg-white border rounded-full overflow-hidden flex justify-center items-center text-[40px]"
              >
                <i className="fas fa-cloud-upload opacity-[0.5]"></i>
              </label>
              <div className="text-[18px]">
                {" "}
                <b className="text-[#000]">Choose a file</b> or drag it here.
              </div>
            </div>
          </div>
          <div className="w-[100%] flex flex-col gap-[25px]">
            <input
              className="w-full border-b py-[10px]"
              name="title"
              type="text"
              placeholder="Blog Title"
              value={blogData.title}
              onChange={handleBlogData}
            />
            <textarea
              className="w-full border-b py-[10px] outline-0"
              placeholder="blog content"
              name="description"
              id=""
              cols={30}
              rows={6}
              onChange={handleBlogData}
              value={blogData.description}
            >
              
            </textarea>

          {/* <Editor
            onInit={(evt, editor) => editorRef.current = editor}
            initialValue={blogData.description}
            init={{
              height: 500,
              menubar: false,
              plugins: [
                'advlist', 'anchor', 'autolink', 'help', 'image', 'link', 'lists',
                'searchreplace', 'table', 'wordcount'
              ],
              toolbar: 'undo redo | blocks | ' +
                'bold italic forecolor | alignleft aligncenter ' +
                'alignright alignjustify | bullist numlist outdent indent | ' +
                'removeformat | help',
              content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
            }}
          /> */}

            <ul className="w-full flex flex-wrap gap-[10px] items-center">
              <li className="bg-[#0C3646] p-[3px_10px] text-white rounded-full cursor-pointer">
                {blogData.userName}
              </li>
            </ul>
          </div>

          <div className="w-full mt-[40px]">
            <button onClick={saveBlog} className="px-[40px] py-[15px] text-[22px] bg-[#00ADB5] text-[#fff] rounded-[5px] hover:opacity-[0.8]">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBlogContent;
