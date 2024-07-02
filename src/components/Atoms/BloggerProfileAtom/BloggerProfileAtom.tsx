import Image from "next/image";

type Props = {
  name: string;
  content: string;
  url: string;
};

export const BloggerProfileAtom = (props: Props) => {
  return (
    <div className='flex flex-col items-center gap-[10px]'>
      <div className='relative h-[150px] w-[150px] rounded-full'>
        <Image
          src={props.url}
          fill
          alt={props.name}
          className='h-full w-full object-cover'
        />
      </div>
      <div className='flex flex-col gap-[10px] text-center'>
        <h2 className='text-[30px] font-bold text-white'>{props.name}</h2>
        <p className='text-[17px] text-accentGrey2'>{props.content}</p>
      </div>
    </div>
  );
};
