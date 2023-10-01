import React from "react";

const Button = ({ icon, title, onClick, color, outline, full }) => {
    return (
      <button
        onClick={onClick}
        className={`py-[10px] px-[18px] ${
          color ? `text-white-100` : ""
        } flex gap-2 items-center justify-center ${
          outline ? "border-[1px] border-primary-dark-blue" : ""
        } rounded-[8px] ${full ? 'w-full' : 'w-fit'}`}
        style={{backgroundColor: color}}
      >
        {icon ? <img src={icon} alt={`${title} icon`} /> : null}
        <p>{title}</p>
      </button>
    );
  };
  

export default Button;
