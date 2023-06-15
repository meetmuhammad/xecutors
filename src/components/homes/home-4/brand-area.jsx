import React from 'react';
import Brands from '../../common/brands';

const BrandArea = () => {
  return (
    <div className="tp-brand-area pt-50 pb-50 black-bg">
      <div className="max-w-[1320px] w-full px-[12px] mx-auto">
        <div className="flex">
          <div className="w-full">
            {/* <div className="tp-brand-title-four text-center pb-60">
              <h4 className="tp-brand-title">Over <b>35k+</b> Software business growing with Xecutors</h4>
            </div> */}
          </div>
        </div>
        <div className="tp-brand-slider-section">
          <div className="swiper-container brand-slider-active">
            <Brands />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandArea;