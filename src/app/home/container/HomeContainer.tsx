import { type MotionValue, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import { HomeTemplate } from "~/components/Templates/Home/HomeTemplate";
import { icons } from "~/data/icons";
import { listcard } from "~/data/listcard";
import { listTitle } from "~/data/listfact";
import { followUsLink } from "~/data/navLinks";
import { postlist } from "~/data/postlist";
import { testimonialList } from "~/data/testimonialList";

export const HomeContainer = () => {
  const cursorX: MotionValue<number> = useMotionValue(-100);
  const cursorY: MotionValue<number> = useMotionValue(-100);
  const [isBlack, setIsBlack] = useState(false);
  const [activeNavbar, setActiveNavbar] = useState(false);
  const [activeDrawer, setActiveDrawer] = useState(false);

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

  const homeTemplateProps: React.ComponentProps<typeof HomeTemplate> = {
    whatCanWeDoModuleProps: {
      cardComponent: {
        lists: listcard.slice(0, 8),
      },
    },
    homeHeaderModuleProps: {
      homeHeaderComponentProps: followUsLink,
      drawerComponentProps: {
        activeDrawer,
        handleDrawer,
        socialComponents: {
          icon: icons,
        },
      },
      mouseCursorComponentProps: {
        mouseCursorAtomProps: {
          cursorX,
          cursorY,
        },
        cursorX,
        cursorY,
      },
      navbarComponentProps: {
        activeNavbar,
        handleDrawer,
        handleToggle,
        isBlack,
      },
    },
    footerModuleProps: {
      socialComponents: {
        icon: icons,
      },
      info: "Welcome to arino sed ut perspiciae omunde omnis iste natus error sitort voluptatem accusantium.",
      listTitleComponentProps: listTitle,
      isDiscussion: true,
      DiscussionComponent: {
        title: "Let’s disscuse make something cool together",
      },
    },
    homeBlogModuleProps: {
      leftContainerComponentProps: {
        subTitle: "Our Blog",
        title: "Explore recent publication",
        link: "View More Blog",
      },
      homeBlogAtomProps: postlist,
    },
    latestProjectModuleProps: {
      subTitle: "Latest Projects",
      title: "Portfolio to explore",
    },
    ourAwardModuleProps: {},
    ourTeamModuleProps: {},
    parnterModuleProps: {
      scrollTextComponentsProps: {
        title: "Our reputed world wide partners",
      },
    },
    testimonialModuleProps: {
      testimonialList: testimonialList,
    },
    videoModuleProps: {},
    // homeContentModulerops: {
    //   DiscussionComponent: {
    //     title: "",
    //   },
    // },
  };

  return <HomeTemplate {...homeTemplateProps} />;
};
