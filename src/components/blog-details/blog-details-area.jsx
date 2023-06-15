import Link from "next/link";
import React from "react";
import BlogSidebar from "../blog/blog-sidebar";
import BlogDetailsForm from "../forms/blog-details-form";
import BlogSlider from "../blog/blog-slider";
import RelatedSlider from "../blog/related-post-slider";
import moment from "moment";

const BlogDetailsArea = ({ blog }) => {
  const { author, date, views, title, description } = blog || {};
  return (
    <>
      <div className="postbox__area pt-100 pb-120">
        <div className="max-w-[1380px] w-full mx-auto px-[20px]">
          <div className="w-full flex">
            <div className="w-full">
              <div className="postbox__wrapper">
                <article className="postbox__item format-image transition-3">
                  <div className="postbox__content">
                    {/* <p>
                      <img className="w-100" src={img} alt="" />
                    </p> */}
                    <div className="postbox__meta">
                      <span>
                        <a href="#">
                          <i className="fal fa-user-circle"></i>
                          {blog?.user?.displayName ?? 'N/A'}
                        </a>
                      </span>
                      <span>
                        <a href="#">
                          <i className="fal fa-clock"></i>
                          {blog?.data && moment(blog?.date).format('ddd MM, yyyy')}
                        </a>
                      </span>
                      <span>
                        {/* <a href="#">
                          <i className="fal fa-comment-alt-lines"></i>({comment}
                          ) Coments
                        </a> */}
                      </span>
                      <span>
                        <a href="#">
                          <i className="fal fa-eye"></i> {views} views
                        </a>
                      </span>
                    </div>
                    {/* <h3 className="postbox__title">{title}</h3> */}
                    <div className="postbox__text">
                      </div>
                      <div className="w-full">
                        <img className="w-full rounded-[10px]"
                                src="/assets/img/blog-details/blog-big-4.webp"
                                alt=""
                              />
                      </div>

                      <div className="w-full py-[40px]" dangerouslySetInnerHTML={{__html: description}}></div>
                      {/* <div className="w-full py-[40px]">
                        <h3 className="font-bold text-[26px] text-black mb-[10px] mt-[30px]">1. Address</h3>
                        <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, tenetur maxime animi itaque porro, mollitia, eaque nostrum explicabo nisi dicta suscipit accusamus culpa quaerat! Voluptatem quo numquam rerum consequuntur aut? </p>
                        <h3 className="font-bold text-[26px] text-black mb-[10px] mt-[30px]">2. Address</h3>
                        <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, tenetur maxime animi itaque porro, mollitia, eaque nostrum explicabo nisi dicta suscipit accusamus culpa quaerat! Voluptatem quo numquam rerum consequuntur aut? </p>
                        <h3 className="font-bold text-[26px] text-black mb-[10px] mt-[30px]">3. Address</h3>
                        <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, tenetur maxime animi itaque porro, mollitia, eaque nostrum explicabo nisi dicta suscipit accusamus culpa quaerat! Voluptatem quo numquam rerum consequuntur aut? </p>
                        <h3 className="font-bold text-[26px] text-black mb-[10px] mt-[30px]">4. Address</h3>
                        <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, tenetur maxime animi itaque porro, mollitia, eaque nostrum explicabo nisi dicta suscipit accusamus culpa quaerat! Voluptatem quo numquam rerum consequuntur aut? </p>
                        <h3 className="font-bold text-[26px] text-black mb-[10px] mt-[30px]">5. Address</h3>
                        <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, tenetur maxime animi itaque porro, mollitia, eaque nostrum explicabo nisi dicta suscipit accusamus culpa quaerat! Voluptatem quo numquam rerum consequuntur aut? </p>
                        <h3 className="font-bold text-[26px] text-black mb-[10px] mt-[30px]">6. Address</h3>
                        <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, tenetur maxime animi itaque porro, mollitia, eaque nostrum explicabo nisi dicta suscipit accusamus culpa quaerat! Voluptatem quo numquam rerum consequuntur aut? </p>
                        

                        
<ol class="space-y-4 list-decimal list-inside text-[16px] mt-[30px] text-black">
   <li className="list-decimal list-inside">
   List item one
      <ul class="pl-5 mt-2 space-y-1 list-disc list-inside">
         <li className="list-disc list-inside text-gray-500">You might feel like you are being really "organized" o</li>
         <li className="list-disc list-inside text-gray-500">Nested navigation in UIs is a bad idea too, keep things as flat as possible.</li>
         <li className="list-disc list-inside text-gray-500">Nesting tons of folders in your source code is also not helpful.</li>
      </ul>
   </li>
   <li className="list-decimal list-inside">
      List item two
      <ul class="pl-5 mt-2 space-y-1 list-disc list-inside">
         <li className="list-disc list-inside text-gray-500">I'm not sure if we'll bother styling more than two levels deep.</li>
         <li className="list-disc list-inside text-gray-500">Two is already too much, three is guaranteed to be a bad idea.</li>
         <li className="list-disc list-inside text-gray-500">If you nest four levels deep you belong in prison.</li>
      </ul>
   </li>
   <li className="list-decimal list-inside">
      List item three
      <ul class="pl-5 mt-2 space-y-1">
         <li className="list-disc list-inside text-gray-500">Again please don't nest lists if you want</li>
         <li className="list-disc list-inside text-gray-500">Nobody wants to look at this.</li>
         <li className="list-disc list-inside text-gray-500">I'm upset that we even have to bother styling this.</li>
      </ul>
   </li>
</ol>

                        </div> */}
                  </div>
                </article>
              </div>
            </div>
            <div className="max-w-[400px] w-full">
              {/* blog sidebar start */}
              <BlogSidebar />
              {/* blog sidebar end */}
            </div>
          </div>

          <div className="w-full">
            <h2 className="text-[36px] text-black font-bold text-center">Related Post</h2>
            <RelatedSlider />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetailsArea;
