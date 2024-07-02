import { type Settings } from "react-slick";
import DividerComponent from "~/components/Components/DividerComponent/DividerComponent";
import { LatestProjectComponent } from "~/components/Components/LatestProjectComponent/LatestProjectComponent";
import { LeftContainerComponent } from "~/components/Components/LeftContainerComponent/LeftContainerComponent";
import { RightContainerComponent } from "~/components/Components/RightContainerComponent/RightContainerComponent";
import SliderCarouselComponent from "~/components/Components/SliderCarouselComponent/SliderCarouselComponent";
import { latestItem } from "~/data/latestItem";
import "./custom.css";
type Props = {
  title: string;
  subTitle: string;
  // Add props here
};

const settings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  centerMode: true,
  className: "center",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
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

export const LatestProjectModule = (props: Props) => {
  return (
    <>
      <DividerComponent className='h-[50px] lg:h-[150px]' />
      <section className='px-[.75rem]'>
        <div className='container mx-auto'>
          <LeftContainerComponent
            subTitle={props.subTitle}
            title={props.title}
            className='flex flex-col items-center'
          />
          <DividerComponent className='h-[45px] lg:h-[90px]' />
        </div>
        <RightContainerComponent>
          <SliderCarouselComponent settings={settings}>
            {latestItem.map((item, index) => (
              <LatestProjectComponent {...item} key={index} />
            ))}
          </SliderCarouselComponent>
        </RightContainerComponent>
      </section>
    </>
  );
};
