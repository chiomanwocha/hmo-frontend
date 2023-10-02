import React from 'react';
import recordImg from '../../../assets/images/record.png';
import { howItWorks } from '../mock/data';

const HowItWorks = () => {
  return (
    <div className="px-8 md:px-24 bg-white-100 py-20" id="how-it-works">
      <div className="text-center mb-8 md:mb-14">
        <h3 className="font-bold text-[32px] md:text-[40px] leading-[50.4px]">How it works</h3>
      </div>
      <div className='flex flex-col md:grid grid-cols-3 gap-10 md:gap-20'>
        {howItWorks.map((item) => (
          <div className="how-it-works-list text-center" key={item.id}>
            <p className="text-[24px] md:text-[32px] text-white-100 w-8 h-8 md:w-16 md:h-16 rounded-full bg-primary-dark-blue flex items-center justify-center mb-8 mx-auto">
              {item.id}
            </p>
            <p className="font-semibold text-[24px] md:text-[28px] leading-[33.89px] mb-2 md:mb-4">
              {item.title}
            </p>
            <p className="text-[18px] md:text-[20px] text-grey-200 leading-[30.26px mb-7 description">
              {item.description}
            </p>
            <div>
              <img src={recordImg} alt="record icon for bullet point" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
