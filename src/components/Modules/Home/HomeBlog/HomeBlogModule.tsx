import Image from "next/image";
import Link from "next/link";
import { type Settings } from "react-slick";
import DividerComponent from "~/components/Components/DividerComponent/DividerComponent";
import { LeftContainerComponent } from "~/components/Components/LeftContainerComponent/LeftContainerComponent";
import { RightContainerComponent } from "~/components/Components/RightContainerComponent/RightContainerComponent";
import SliderCarouselComponent from "~/components/Components/SliderCarouselComponent/SliderCarouselComponent";
import "./custom.css";
import { HomeBlogAtom } from "~/components/Atoms/HomeBlogAtom/HomeBlogAtom";
type Props = {
  leftContainerComponentProps: React.ComponentProps<
    typeof LeftContainerComponent
  >;
  homeBlogAtomProps: Array<React.ComponentProps<typeof HomeBlogAtom>>;
  // Add props here
};
const settings: Settings = {
  dots: false,
  infinite: true,
  speed: 2000,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: "linear",
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export const HomeBlogModule = (props: Props) => {
  return (
    <>
      <DividerComponent className='h-[80px] lg:h-[150px]' />
      <section className='relative px-[.75rem]'>
        <div className='shape-1 hidden lg:block'></div>
        <div className='shape-2 hidden lg:block'></div>
        <div className='container mx-auto w-full'>
          <div className='flex flex-col items-start xl:flex-row'>
            <LeftContainerComponent
              {...props.leftContainerComponentProps}
              className='shrink-0 xl:w-[30%]'
            />
            <RightContainerComponent className='xl:w-[80%]'>
              <SliderCarouselComponent
                className='xl:relative xl:right-[-12rem]'
                settings={settings}
              >
                {props.homeBlogAtomProps.map((post, index) => (
                  <HomeBlogAtom key={index} {...post} />
                ))}
              </SliderCarouselComponent>
            </RightContainerComponent>
          </div>
        </div>
      </section>
      <DividerComponent className='h-[80px] lg:h-[150px]' />
    </>
  );
};
