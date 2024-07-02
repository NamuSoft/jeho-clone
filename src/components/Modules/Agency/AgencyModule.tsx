import LinkArrow from "~/components/Components/LinkArrow/LinkArrow";

type Props = {
  // Add props here
};

export const AgencyModule = (props: Props) => {
  return (
    <div className='mx-auto w-full'>
      <div className='relative z-20 flex h-[200px]  w-full flex-col items-center justify-center gap-[30px] bg-linear-gradient px-[30px] py-[40px] md:px-[50px] xl:flex-row xl:px-[80px] xl:py-[70px]'>
        <div className='cs-shape_1'></div>
        <div className='cs-shape_1'></div>
        <div className='cs-shape_1'></div>
        <div className='absolute bottom-0 left-0 -z-10 h-full w-full bg-fun-fact to-[100%] bg-[100%] bg-no-repeat'></div>
        <div className='flex flex-col items-center gap-[40px] text-white'>
          <h2 className='mb-[20px] w-full text-center text-[28px] font-bold sm:max-w-[590px] md:text-[36px] lg:text-[42px] xl:text-[50px]'>
            {/* {title} */}
            agency@arino.com
          </h2>
        </div>
      </div>
    </div>
  );
};
