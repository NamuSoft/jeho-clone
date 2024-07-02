import Link from "next/link";

type Props = {
  title: string;
  links: Array<{ text: string }>;
  // Add props here
};

export const TagListAtom = (props: Props) => {
  return (
    <div className='flex flex-col gap-[20px]'>
      <h2 className='text-[30px] font-bold text-white'>{props.title}</h2>
      <ul className='flex flex-wrap gap-[10px]'>
        {props.links.map((link, index) => (
          <li
            key={index}
            className='group flex items-center border-2 p-[5px] px-[13px] text-[14px] text-accentGrey2 hover:border-accentRed hover:bg-accentRed'
          >
            <Link href={"#"} className='group-hover:text-white'>
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
