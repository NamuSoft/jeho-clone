import { type MotionValue, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import { PortfolioTemplate } from "~/components/Templates/Portfolio/PortfolioTemplate";
import { icons } from "~/data/icons";
import { listTitle } from "~/data/listfact";
import { portfolioListContent, portfolioListTag } from "~/data/portfolioList";

export const PortfolioContainer = () => {
  const cursorX: MotionValue<number> = useMotionValue(-100);
  const cursorY: MotionValue<number> = useMotionValue(-100);
  const [isBlack, setIsBlack] = useState(false);
  const [activeNavbar, setActiveNavbar] = useState(false);
  const [activeDrawer, setActiveDrawer] = useState(false);
  const [activeTag, setActiveTag] = useState("All");
  const [itemsToShow, setItemsToShow] = useState(7);

  const handleToggle = () => {
    setActiveNavbar(!activeNavbar);
  };

  const handleDrawer = () => {
    setActiveDrawer(!activeDrawer);
  };

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 100) {
      setIsBlack(true);
      console.log(scrolled);
    } else if (scrolled <= 100) {
      setIsBlack(false);
    }
  };
  const handleLoadMore = () => {
    setItemsToShow(itemsToShow + 3);
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
  }, []);
  useEffect(() => {
    const mouseCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };
    window.addEventListener("mousemove", mouseCursor);
    return () => {
      window.removeEventListener("mousemove", mouseCursor);
    };
  }, [cursorX, cursorY]);
  const portfolioTemplateProps: React.ComponentProps<typeof PortfolioTemplate> =
    {
      portfolioOurPortfolioWorkModuleProps: {
        portfolioGridComponentsProps: {
          portfolioContent: portfolioListContent,
          activeTag,
          itemsToShow,
        },
        handleLoadMore,
        itemsToShow,
        portfolioTagsComponentsProps: {
          tags: portfolioListTag,
          setActiveTag,
          activeTag,
        },
        activeTag,
        leftContainerComponentProps: {
          subTitle: "Our Portfolio",
          title: "Some recent work",
        },
      },
      footerModuleProps: {
        isDiscussion: false,
        listTitleComponentProps: listTitle,
        info: "Welcome to arino sed ut perspiciae omunde omnis iste natus error sitort voluptatem accusantium.",
        DiscussionComponent: {
          title: "",
        },
        socialComponents: {
          icon: icons,
        },
      },
      headerModuleProps: {
        headerComponentProps: {
          bgImage: "bg-portfolio-bg",
          headerAtomProps: {
            currentPage: "Portfolio",
            prevLink: "/",
            prevText: "Home",
            title: "Portfolio",
          },
        },
        drawerComponentProps: {
          activeDrawer,
          handleDrawer,
          socialComponents: {
            icon: icons,
          },
        },
        mouseCursorComponentProps: {
          cursorX,
          cursorY,
          mouseCursorAtomProps: {
            cursorX,
            cursorY,
          },
        },
        navbarComponentProps: {
          activeNavbar,
          handleDrawer,
          handleToggle,
          isBlack,
        },
      },
    };

  return <PortfolioTemplate {...portfolioTemplateProps} />;
};
