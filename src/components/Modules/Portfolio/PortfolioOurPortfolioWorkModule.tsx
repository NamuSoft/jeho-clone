import DividerComponent from "~/components/Components/DividerComponent/DividerComponent";
import { LeftContainerComponent } from "~/components/Components/LeftContainerComponent/LeftContainerComponent";
import { PortfolioTagsComponents } from "~/components/Components/PortfolioTagsComponents/PortfolioTagsComponents";
import "./custom.css";
import Link from "next/link";
import { type portfolioListContentprops } from "~/data/portfolioList";
import Image from "next/image";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useState } from "react";
import { PortfolioGridComponent } from "~/components/Components/PortfolioGridComponent/PortfolioGridComponent";
type Props = {
  leftContainerComponentProps: React.ComponentProps<
    typeof LeftContainerComponent
  >;
  portfolioTagsComponentsProps: React.ComponentProps<
    typeof PortfolioTagsComponents
  >;
  portfolioGridComponentsProps: React.ComponentProps<
    typeof PortfolioGridComponent
  >;
  activeTag: string;
  itemsToShow: number;
  handleLoadMore: () => void;
};

export const PortfolioOurPortfolioWorkModule = (props: Props) => {
  const filteredPortfolio =
    props.activeTag === "All"
      ? props.portfolioGridComponentsProps.portfolioContent
      : props.portfolioGridComponentsProps.portfolioContent.filter(
          (item) => item.tag === props.activeTag
        );
  return (
    <>
      <DividerComponent className='h-[80px] lg:h-[145px]' />
      <section className='w-full px-[.75rem] text-white'>
        <div className='container mx-auto flex w-full flex-col'>
          <div className='flex w-full flex-col items-start justify-between gap-[30px] xl:flex-row xl:items-end'>
            <LeftContainerComponent
              className='xl:w-[40%]'
              {...props.leftContainerComponentProps}
            />
            <PortfolioTagsComponents {...props.portfolioTagsComponentsProps} />
          </div>
          <DividerComponent className='h-[45px] lg:h-[90px]' />
          <PortfolioGridComponent {...props.portfolioGridComponentsProps} />
        </div>
        {props.itemsToShow < filteredPortfolio.length && (
          <button
            className='mx-auto mt-[50px] flex w-[130px] items-center gap-[10px] text-white'
            onClick={props.handleLoadMore}
          >
            <span className='text-[18px]'>Load More</span>
            <ArrowRightOutlined />
          </button>
        )}
      </section>
    </>
  );
};
