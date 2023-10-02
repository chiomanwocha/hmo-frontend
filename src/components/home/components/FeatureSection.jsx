import React from 'react';
import videoRepository from '../../../assets/images/video-repository.jpg';
import { featureObj } from '../mock/data';

const FeatureSection = () => {
  
  return (
    <div className="px-8 md:px-24 bg-white-100 py-20" id="features">
      <div className="text-center flex flex-col gap-2 mb-16">
        <h3 className="font-bold text-[32px] md:text-[40px] leading-[50.4px]">Features</h3>
        <p className="text-grey-200 text-[18px] md:text-[20px] leading-[30.26px]">
          Key Highlights of Our Extension
        </p>
      </div>
      <div className="flex flex-col-reverse gap-20 lg:gap-0 lg:flex-row justify-between items-center">
        <div className="lg:w-[40%] flex flex-col gap-12">
          {featureObj.map((item) => (
            <div className="flex gap-4" key={item.title}>
              <div>
                <img
                  src={item.icon}
                  alt={`icon for ${item.title} bullet point`}
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-semibold text-[20px] md:text-[28px] text-primary-dark-blue">
                  {item.title}
                </p>
                <p className="md:leading-[30.26px] text-grey-200">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="lg:w-[50%]">
          <img
            src={videoRepository}
            alt="video repository screenshot for feature section"
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
