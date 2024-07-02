import Link from "next/link";

type Props = {
  text: string;
};

export const ListTitleAtom = (props: Props) => {
  return (
    <li className='max-w-[70%] text-[16px] lg:text-[18px]'>
      <Link className='hover:text-accentRed' href={"#"}>
        {props.text}
      </Link>
    </li>
  );
};
