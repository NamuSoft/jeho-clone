import Image from "next/image";
import Link from "next/link";

type Props = {
  url: string;
  date: string;
  title: string;
  // Add props here
};

export const HomeBlogAtom = (props: Props) => {
  return (
    <div
      className={`relative mt-[20px] block h-[390px] w-[300px] shrink-0 overflow-hidden rounded-[15px] lg:h-[370px] xl:mt-0`}
    >
      <Link
        href={"#"}
        className={`relative block h-full w-full rounded-[12px]`}
      >
        <Image
          src={props.url}
          fill
          className='h-full w-full max-w-[100%] rounded-[12px] object-cover'
          alt={"title"}
        />
        <div className='absolute inset-0 flex items-end justify-end'>
          <div className='absolute inset-0 rounded-[12px] bg-black bg-opacity-50'></div>
          <div className='relative bottom-0 left-0 w-full px-[20px] py-[30px]'>
            <p>{props.date}</p>
            <h2 className='text-pContent1 relative left-0 pt-[14px] font-bold text-white'>
              {props.title}
            </h2>
          </div>
        </div>
      </Link>
    </div>
  );
};
