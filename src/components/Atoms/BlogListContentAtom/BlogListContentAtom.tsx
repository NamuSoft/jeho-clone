import { ArrowRightOutlined } from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  url: string;
  date: string;
  description: string;
  tag: string;
  // Add props here
};

export const BlogListContentAtom = (props: Props) => {
  return (
    <div className='flex w-full flex-col gap-[20px]'>
      <div className='group relative h-[520px] w-full overflow-hidden rounded-[15px] transition-all duration-500'>
        <Image
          src={props.url}
          fill
          alt=''
          className='h-full w-full object-cover transition-all duration-500 group-hover:scale-110'
        />
        <div className='h-full w-full bg-black bg-opacity-40 group-hover:absolute'></div>
      </div>
      <div className='mt-[20px] flex items-center gap-[14px] text-[18px] font-bold text-white'>
        <h2 className='text-accentGrey2'>{props.date}</h2>
        <p>|</p>
        <Link className='text-accentGrey2 hover:text-accentRed' href={"#"}>
          {props.tag}
        </Link>
      </div>
      <Link
        href={"#"}
        className='w-fit text-[42px] font-bold text-white hover:text-accentRed'
      >
        {props.title}
      </Link>
      <div className='flex flex-col gap-[35px]'>
        <p className='text-[17px] text-accentGrey2'>{props.description}</p>

        <Link
          href={"#"}
          className='flex w-fit items-center gap-[20px] font-semibold text-white hover:text-accentRed'
        >
          <span>See More</span>
          <ArrowRightOutlined />
        </Link>
      </div>
    </div>
  );
};
