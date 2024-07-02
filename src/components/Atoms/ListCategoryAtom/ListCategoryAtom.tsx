import { DoubleRightOutlined } from "@ant-design/icons";
import Link from "next/link";

type Props = {
  title: string;
  links: Array<{ text: string }>;
};

export const ListCategoryAtom = (props: Props) => {
  return (
    <div className='flex flex-col gap-[20px]'>
      <h2 className='text-[30px] font-bold text-white'>{props.title}</h2>
      <ul className='flex flex-col gap-[20px]'>
        {props.links.map((link, index) => (
          <li
            key={index}
            className='flex items-center gap-[10px] text-[17px] text-accentGrey2'
          >
            <DoubleRightOutlined />
            <Link href={"#"} className='hover:text-accentRed'>
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
