import Link from "next/link";

type HeaderAtomProps = {
  title: string;
  prevText: string;
  currentPage: string;
  prevLink: string;
};

export const HeaderAtom = (props: HeaderAtomProps) => {
  const { title, prevLink, prevText, currentPage } = props;

  return (
    <div className='text-white'>
      <h2 className='mb-[14px] text-[42px] font-bold md:text-[52px]'>
        {title}
      </h2>
      <div className='flex items-center justify-end gap-[10px] text-[17px] uppercase'>
        <Link href={prevLink} className='text-accentGrey'>
          {" "}
          {prevText}
        </Link>
        <span>|</span>
        <p>{currentPage}</p>
      </div>
    </div>
  );
};
