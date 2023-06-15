import React, { useMemo } from 'react';
import { FooterThree, HeaderFour, Wrapper } from '../../layout';
import Breadcrumb from '../../components/common/breadcrumb/breadcrumb';
import BlogCard from '../../components/blog/blog-card';


const index = () => {
  return (
    <Wrapper>
    <HeaderFour />
    <Breadcrumb title={'Blogs'} imgName={"blog-min.webp"} />
    <BlogCard />
    <FooterThree />
  </Wrapper>
  );
};

export default index;