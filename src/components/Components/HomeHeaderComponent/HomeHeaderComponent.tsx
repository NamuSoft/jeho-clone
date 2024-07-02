import { HomeHeaderAtom } from "~/components/Atoms/HomeHeaderAtom/HomeHeaderAtom";

type Props = {
  title: string;
  lists: Array<React.ComponentProps<typeof HomeHeaderAtom>>;
  // Add props here
};

export const HomeHeaderComponent = (props: Props) => {
  return (
    <div className='absolute -right-[78px] top-[35%] z-40 hidden translate-y-[85%] -rotate-90 items-center gap-[12px] text-[17px] text-white xl:flex'>
      <div className='flex items-center gap-[10px]'>
        <p className=''>Follow Us</p>
        <hr className='w-[20px]' />
      </div>
      <ul className='flex items-center gap-[16px]'>
        {props.lists.map((list, index) => (
          <HomeHeaderAtom {...list} key={index} />
        ))}
        {/* <p>|</p> */}
      </ul>
    </div>
  );
};
