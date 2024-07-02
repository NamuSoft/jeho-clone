import React from "react";
import { AboutBlogListComponent } from "~/components/Components/AboutBlogListComponent/AboutBlogListComponent";
import { BlogListComponent } from "~/components/Components/BlogListComponent/BlogListComponent";
import DividerComponent from "~/components/Components/DividerComponent/DividerComponent";

type Props = {
  blogListComponent: React.ComponentProps<typeof BlogListComponent>;
  aboutBlogListComponentProps: React.ComponentProps<
    typeof AboutBlogListComponent
  >;
};

export const BlogListAreaModule = (props: Props) => {
  return (
    <section className='px-[.75rem]'>
      <div className='container mx-auto w-full'>
        <DividerComponent className='h-[80px] lg:h-[145px]' />
        <div className='flex flex-col gap-[50px] lg:flex-row lg:justify-between'>
          <BlogListComponent {...props.blogListComponent} />
          <AboutBlogListComponent {...props.aboutBlogListComponentProps} />
        </div>
      </div>
    </section>
  );
};
