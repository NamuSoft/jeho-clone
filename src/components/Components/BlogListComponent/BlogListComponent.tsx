import { RightOutlined } from "@ant-design/icons";
import Link from "next/link";
import { BlogListContentAtom } from "~/components/Atoms/BlogListContentAtom/BlogListContentAtom";
import { PaginationComponent } from "../PaginationComponent/PaginationComponent";

type Props = {
  blogLists: Array<React.ComponentProps<typeof BlogListContentAtom>>;
  paginationComponentProps: React.ComponentProps<typeof PaginationComponent>;
  // Add props here
};

export const BlogListComponent = (props: Props) => {
  return (
    <div className='flex w-full flex-col gap-[50px] lg:w-[68%]'>
      {props.blogLists.map((blogList, index) => (
        <BlogListContentAtom key={index} {...blogList} />
      ))}
      <PaginationComponent {...props.paginationComponentProps} />
    </div>
  );
};
