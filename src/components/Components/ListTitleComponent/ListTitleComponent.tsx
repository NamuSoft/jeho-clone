import { ListTitleAtom } from "~/components/Atoms/ListTitleAtom/ListTitleAtom";

type Props = {
  title: string;
  listMap: Array<React.ComponentProps<typeof ListTitleAtom>>;
  // Add props here
};

export const ListTitleComponent = (props: Props) => {
  return (
    <div className='ml-0 mt-[30px] sm:mt-0 lg:ml-[30px]'>
      <p className='text-[16px] font-semibold text-white lg:text-[18px]'>
        {props.title}
      </p>
      <ul className='mt-[15px] flex flex-col gap-[15px]'>
        {props.listMap.map((list, index) => (
          <div key={index}>
            <ListTitleAtom key={index} text={list.text} />
          </div>
        ))}
      </ul>
    </div>
  );
};
