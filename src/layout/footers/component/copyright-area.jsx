import Link from 'next/link';
import React from 'react';
import SocialLinks from '../../social-links';

const CopyrightArea = ({copy_right_text='',conditions=[],color=''}) => {
  return (
    <div className="tp-copyright-area">
    <div className="max-w-[1320px] w-full mx-auto px-[12px]">
      <div className="copyright-border pt-40 wow tpfadeUp" data-wow-duration=".5s" data-wow-delay=".7s">
        <div className="flex flex-wrap justify-between">
          <div className="w-full lg:w-1/3">
            <div className="tp-copyright-left text-lg-start text-start text-md-center">
              <p className={`${color?'text-black':''}`}>{copy_right_text}</p>
            </div>
          </div>
          <div className='w-full lg:w-1/3'>
          <SocialLinks />
          </div>
          <div className="w-full lg:w-1/3">
            <div className={`tp-copyright-right ${color} text-start text-md-center text-lg-end`}>
              {conditions.map((c, i) => <Link key={i} href={c.url}>{c.name}</Link>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default CopyrightArea;