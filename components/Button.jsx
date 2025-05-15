import React from "react";

const Button = ({ bgColor, text, onClick, hover }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full md:w-auto ${bgColor} ${hover} font-medium rounded-3xl text-white px-6 py-2 border-2 border-dashed hover:cursor-pointer hover:border-white transition-all hover:scale-[1.02] active:scale-95 shadow-md hover:shadow-cyan-500/20`}
    >
      {text}
    </button>
  );
};

export default Button;
