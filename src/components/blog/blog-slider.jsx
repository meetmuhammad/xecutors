import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BlogSliderCard from './BlogSliderCard';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};




const BlogSlider = ({ latestBlogs }) => {


  return (
    <Slider {...settings}>
      {latestBlogs && latestBlogs.map((blog, i) => (
        <div>
          <BlogSliderCard blog={blog} key={i} />
        </div>
      ))}
    </Slider>
  );
};

export default BlogSlider;
