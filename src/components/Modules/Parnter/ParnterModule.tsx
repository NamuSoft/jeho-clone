import React from "react";
import SVGAtom from "~/components/Atoms/SVGAtom/SVGAtom";
import DividerComponent from "~/components/Components/DividerComponent/DividerComponent";
import ScrollTextComponents from "~/components/Components/ScrollTextComponents/ScrollTextComponents";

type Props = {
  scrollTextComponentsProps: React.ComponentProps<typeof ScrollTextComponents>;
  // Add props here
};

export const ParnterModule = (props: Props) => {
  return (
    <>
      <ScrollTextComponents {...props.scrollTextComponentsProps} />
      <DividerComponent className='h-[70px] lg:h-[105px]' />
      <section className='px-[.75rem]'>
        <div className='container mx-auto flex w-full items-center justify-between'>
          <SVGAtom
            iconName='partner_1'
            width={150}
            height={150}
            className='h-[50px] w-[50px] sm:h-[150px] sm:w-[150px]'
          />
          <SVGAtom
            iconName='partner_2'
            width={150}
            height={150}
            className='h-[50px] w-[50px] sm:h-[150px] sm:w-[150px]'
          />
          <SVGAtom
            iconName='partner_3'
            width={150}
            height={150}
            className='h-[50px] w-[50px] sm:h-[150px] sm:w-[150px]'
          />
          <SVGAtom
            iconName='partner_4'
            width={150}
            height={150}
            className='h-[50px] w-[50px] sm:h-[150px] sm:w-[150px]'
          />
          <SVGAtom
            iconName='partner_5'
            width={150}
            height={150}
            className='h-[50px] w-[50px] sm:h-[150px] sm:w-[150px]'
          />
        </div>
      </section>
    </>
  );
};
