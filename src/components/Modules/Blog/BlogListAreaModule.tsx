import React from "react";
import { BlogListComponent } from "~/components/Components/BlogListComponent/BlogListComponent";
import DividerComponent from "~/components/Components/DividerComponent/DividerComponent";

type Props = {
  blogListComponent: React.ComponentProps<typeof BlogListComponent>;
};

export const BlogListAreaModule = (props: Props) => {
  return (
    <section className='px-[.75rem]'>
      <div className='container mx-auto w-full'>
        <DividerComponent className='h-[80px] lg:h-[145px]' />
        <div className='flex flex-col xl:flex-row'>
          <BlogListComponent {...props.blogListComponent} />
        </div>
      </div>
    </section>
  );
};
