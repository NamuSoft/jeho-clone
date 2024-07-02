import { type MotionValue, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import { ServiceTemplate } from "~/components/Templates/Service/ServiceTemplate";
import { icons } from "~/data/icons";
import { listcard } from "~/data/listcard";
import { listTitle } from "~/data/listfact";
import { packagelist } from "~/data/packagelist";
import { testimonialList } from "~/data/testimonialList";

export const ServiceContainer = () => {
  const cursorX: MotionValue<number> = useMotionValue(-100);
  const cursorY: MotionValue<number> = useMotionValue(-100);
  const [isBlack, setIsBlack] = useState(false);
  const [activeNavbar, setActiveNavbar] = useState(false);
  const [activeDrawer, setActiveDrawer] = useState(false);
  const [isActive, setIsActive] = useState("Monthly");

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
  const serviceTemplateProps: React.ComponentProps<typeof ServiceTemplate> = {
    servicePricingPackModuleProps: {
      isActive,
      leftContainerComponentProps: {
        subTitle: "Pricing & Packaging",
        title: "Providing best pricing for client",
      },
      packagelist: packagelist,
      serviceButtonComponentProps: {
        buttons: ["Monthly", "Yearly"],
        isActive,
        setIsActive,
      },
    },
    whatCanWeDoModuleProps: {
      cardComponent: {
        lists: listcard,
      },
    },
    headerModuleProps: {
      headerComponentProps: {
        bgImage: "bg-other-bg",
        headerAtomProps: {
          currentPage: "Services",
          title: "Services",
          prevLink: "/service",
          prevText: "Home",
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
      drawerComponentProps: {
        activeDrawer,
        handleDrawer,
        socialComponents: {
          icon: icons,
        },
      },
    },
    footerModuleProps: {
      listTitleComponentProps: listTitle,
      info: "Welcome to arino sed ut perspiciae omunde omnis iste natus error sitort voluptatem accusantium.",
      socialComponents: {
        icon: icons,
      },
      isDiscussion: true,
      DiscussionComponent: {
        title: "Let’s disscuse make something cool together",
      },
    },
    testimonialModuleProps: {
      testimonialList: testimonialList,
    },
  };

  return <ServiceTemplate {...serviceTemplateProps} />;
};
