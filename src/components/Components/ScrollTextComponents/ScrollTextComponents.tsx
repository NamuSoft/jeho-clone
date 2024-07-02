import React from "react";
import "./custom.css";
type Props = {
  title: string;
};
const ScrollTextComponents = (props: Props) => {
  return (
    <div className={`flex flex-nowrap items-center whitespace-nowrap`}>
      <p className='text px-[6px] py-[5px] text-[42px] text-transparent  md:text-[50px] lg:text-[100px] xl:text-[120px]'>
        {props.title}
      </p>

      <p className='text px-[6px] py-[5px] text-[42px] text-transparent md:text-[50px] lg:text-[100px] xl:text-[120px]'>
        {props.title}
      </p>
    </div>
  );
};

export default ScrollTextComponents;
