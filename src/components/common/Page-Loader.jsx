import Link from 'next/link';
import React from 'react';
import loaderImg from '../../../public/assets/img/logo/svg_xecu.svg'

const PageLoader = () => {
  return (
    <div className='fixed left-0 right-0 top-0 bottom-0 flex items-center justify-center bg-[#fff] bg-opacity-[0.9] z-[9999]'>
        <div className='w-[100px] h-[100px] flex bg-white rounded-full p-[20px] animation-pulse-load'>
            <img className='w-full h-full' src="../../../assets/img/logo/svg_xecu.svg" alt="" />
        </div>
    </div>
  );
};

export default PageLoader;