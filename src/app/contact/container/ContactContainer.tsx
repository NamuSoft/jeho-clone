import { type MotionValue, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import { ContactTemplate } from "~/components/Templates/Contact/ContactTemplate";
import { icons } from "~/data/icons";
import { info } from "~/data/info";
import { listTitle } from "~/data/listfact";
import { encrypted, tag } from "~/utils/api_key";

export const ContactContainer = () => {
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
  // AIzaSyCkialBeSyPmOnrcctllRHwQ5PnxiHB4Gs
  const contactTemplateProps: React.ComponentProps<typeof ContactTemplate> = {
    headerModuleProps: {
      drawerComponentProps: {
        activeDrawer,
        handleDrawer,
        socialComponents: {
          icon: icons,
        },
      },
      headerComponentProps: {
        bgImage: "bg-contact-bg",
        headerAtomProps: {
          currentPage: "Contact Us",
          title: "Contact",
          prevLink: "/",
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
    },
    contactFormSectionModuleProps: {
      leftContainerComponentProps: {
        title: "Do you have a project in your mind?",
        subTitle: "Getting Touch",
      },
      info: info,
    },
    footerModuleProps: {
      DiscussionComponent: {
        title: "Let’s disscuse make something cool together",
      },
      info: "Welcome to arino sed ut perspiciae omunde omnis iste natus error sitort voluptatem accusantium.",
      isDiscussion: true,
      listTitleComponentProps: listTitle,
      socialComponents: {
        icon: icons,
      },
    },
  };

  return <ContactTemplate {...contactTemplateProps} />;
};
