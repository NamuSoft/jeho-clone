import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  listArchives: Array<{ url: string; title: string; date: string }>;
  // Add props here
};

export const ArchivesListAtom = (props: Props) => {
  return (
    <div className='flex flex-col gap-[20px]'>
      <h2 className='text-[30px] font-bold text-white'>{props.title}</h2>
      <div className='flex flex-col gap-[20px]'>
        {props.listArchives.map((list, index) => (
          <div key={index} className='flex items-center gap-[15px]'>
            <Link
              href={"#"}
              className='relative block h-[50px] w-[50px] overflow-hidden rounded-[10px]'
            >
              <Image
                src={list.url}
                fill
                alt={list.date}
                className='h-full w-full object-cover transition-all duration-500 hover:scale-125'
              />
            </Link>
            <div>
              <Link
                className='text-[20px] font-bold text-white hover:text-accentRed'
                href={"#"}
              >
                {list.title}
              </Link>
              <p className='text-[17px] text-accentGrey2'>{list.date}</p>
            </div>
          </div>
        ))}

        {/* {props.listArchives.map((link, index) => (
        <li
          key={index}
          className='flex items-center gap-[10px] text-[17px] text-accentGrey2'
        >
          <DoubleRightOutlined />
          <Link href={"#"} className='hover:text-accentRed'>
            {link.text}
          </Link>
        </li>
      ))} */}
      </div>
    </div>
  );
};
