import React from 'react';
import logo from '../../assets/svgs/white-icon.svg';
import { footerNavigations } from '../home/mock/data';

const Footer = () => {
  return (
    <div className="px-12 md:px-24 bg-primary-dark-blue py-10 md:py-20 flex flex-col md:flex-row gap-14 lg:gap-60 text-white-100">
      <div>
        <img src={logo} alt="footer logo" />
      </div>
      <div className='flex justify-between flex-grow flex-col md:flex-row gap-10 md:gap-0'>
        {footerNavigations.map((item) => (
          <div key={item.title}>
            <p className="cursor-default font-semibold mb-4 md:mb-7">{item.title}</p>
            <ul className="flex flex-col gap-2 md:gap-6">
              {item.children.map((item) => (
                <li
                  key={item}
                  className="cursor-pointer w-fit hover-underline-animation-footer"
                  onClick={() => null}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
