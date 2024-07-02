import { type MotionValue, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import { BlogTemplate } from "~/components/Templates/Blog/BlogTemplate";
import {
  Archives,
  ArchivesImage,
  Categories,
  TagList,
  blogList,
  blogger,
  paginationList,
} from "~/data/blog";
import { icons } from "~/data/icons";
import { listTitle } from "~/data/listfact";

export const BlogContainer = () => {
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
  const blogTemplateProps: React.ComponentProps<typeof BlogTemplate> = {
    headerModuleProps: {
      headerComponentProps: {
        bgImage: "bg-blog-bg",
        headerAtomProps: {
          currentPage: "Blog",
          prevLink: "/",
          prevText: "Home",
          title: "Our Blog",
        },
      },
      drawerComponentProps: {
        activeDrawer,
        handleDrawer,
        socialComponents: {
          icon: icons,
        },
      },
      navbarComponentProps: {
        activeNavbar,
        handleDrawer,
        handleToggle,
        isBlack,
      },
      mouseCursorComponentProps: {
        cursorX,
        cursorY,
        mouseCursorAtomProps: {
          cursorX,
          cursorY,
        },
      },
    },
    blogListAreaModuleProps: {
      blogListComponent: {
        blogLists: blogList,
        paginationComponentProps: {
          paginationAtomProps: paginationList,
        },
      },
      aboutBlogListComponentProps: {
        bloggerProfileAtomProps: blogger,
        listCategoryAtomProps1: Categories,
        listCategoryAtomProps2: Archives,
        archivesListAtomProps: ArchivesImage,
        tagListAtomProps: TagList,
      },
    },
    footerModuleProps: {
      DiscussionComponent: {
        title: "Let’s disscuse make something cool together",
      },
      info: "Welcome to arino sed ut perspiciae omunde omnis iste natus error sitort voluptatem accusantium.",
      isDiscussion: true,
      socialComponents: {
        icon: icons,
      },
      listTitleComponentProps: listTitle,
    },
  };

  return <BlogTemplate {...blogTemplateProps} />;
};
