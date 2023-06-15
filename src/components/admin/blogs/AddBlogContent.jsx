import React, { useState, useRef } from "react";
import Image from "next/image";
import nHostLib from "../../../utils/nhostlib";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import moment from "moment";
import { v4 as uuid } from "uuid";
// import Editor from "../../common/Editor"

const AddBlogContent = () => {
  const editorRef = useRef(null);
  const router = useRouter();
  const [blogData, setBlogData] = useState({
    title: "",
    description: "",
    image: "",
  });

  const handleBlogData = (e) => {
    const { name, value } = e.target;
    setBlogData({ ...blogData, [name]: value });
  };

  const [previewImage, setPreviewImage] = useState(null);

  const handleImageChange = async (event) => {
    const selectedFile = event.target.files[0];
    console.log(selectedFile);
    const { fileMetadata, error } = await nHostLib.uploadFile_2({
      selectedFile,
    });

    console.log(fileMetadata, error);

    setPreviewImage(URL.createObjectURL(selectedFile));
  };

  const addBlog = async (e) => {
    e.preventDefault();
    console.log("data", blogData);
    let finalData = {
      title: blogData.title,
      image: blogData.image,
      description: editorRef.current.getContent(),
      id: uuid(),
      created_at: moment(new Date()).format("YYYY-MM-DD HH:mm:ss").toString(),
      updated_at: moment(new Date()).format("YYYY-MM-DD HH:mm:ss").toString(),
    };
    const data = await fetch(`/api/blogs/add`, {
      method: "POST",
      body: JSON.stringify(finalData),
    });

    const res = await data.json();

    console.log("add blog ===>", res);
    if (res.blog?.errors !== undefined) {
      toast.error(res?.blog?.errors[0].message);
    } else if (res?.blog?.data?.insert_blog_one?.id !== null) {
      toast.success("Blog added successfully");
      router.push("/admin/blogs");
    }
  };

  return (
    <div className="w-full pt-[20px] p-[40px] flex flex-col gap-[30px]">
      <div className="flex flex-col gap-[10px]">
        <h1 className="text-[#000] m-0 text-[30px] lg:text-[40px]">
          Add <b className="text-[#00adb5]">Blog</b>
        </h1>
      </div>
      <div></div>

      <div className="w-full pb-[30px] pt-[20px]">
        <form className="w-full flex flex-wrap" action="">
          <div className="w-[100%]">
            <label
              htmlFor="fileUpload"
              className="cursor-pointer upload-img w-full h-[280px] bg-[#f7f7f7] rounded-[10px] mb-[20px] flex flex-col gap-[20px] justify-center items-center"
            >
              <input
                id="fileUpload"
                type="file"
                onChange={handleImageChange}
                className="hidden"
              />
              <div className="w-[150px] h-[150px] bg-white relative border rounded-full overflow-hidden flex justify-center items-center text-[40px]">
                {previewImage ? (
                  <Image
                    className="object-cover"
                    src={previewImage}
                    layout="fill"
                  />
                ) : (
                  <i className="fas fa-cloud-upload opacity-[0.5]"></i>
                )}
              </div>
              <div className="text-[18px]">
                {" "}
                <b className="text-[#000]">Choose a file</b>
                {/* or drag it here. */}
              </div>
            </label>
          </div>
          <div className="w-[100%] flex flex-col gap-[25px]">
            <input
              className="w-full border-b py-[10px] text-black"
              name="title"
              type="text"
              value={blogData.title}
              placeholder="Blog Title"
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
            ></textarea>
            {/* <Editor
                onInit={(evt, editor) => editorRef.current = editor}
                initialValue={`Blog content...`}
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
                author
              </li>
            </ul>
          </div>

          <div className="w-full mt-[40px]">
            <button
              onClick={addBlog}
              className="px-[40px] py-[15px] text-[22px] bg-[#00ADB5] text-[#fff] rounded-[5px] hover:opacity-[0.8]"
            >
              Add Blog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBlogContent;
