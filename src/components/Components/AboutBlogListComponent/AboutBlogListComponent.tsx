import { SearchOutlined } from "@ant-design/icons";
import Image from "next/image";
import React from "react";
import { ArchivesListAtom } from "~/components/Atoms/ArchivesListAtom/ArchivesListAtom";
import { BloggerProfileAtom } from "~/components/Atoms/BloggerProfileAtom/BloggerProfileAtom";
import { ListCategoryAtom } from "~/components/Atoms/ListCategoryAtom/ListCategoryAtom";
import { TagListAtom } from "~/components/Atoms/TagListAtom/TagListAtom";

type Props = {
  bloggerProfileAtomProps: React.ComponentProps<typeof BloggerProfileAtom>;
  listCategoryAtomProps1: React.ComponentProps<typeof ListCategoryAtom>;
  listCategoryAtomProps2: React.ComponentProps<typeof ListCategoryAtom>;
  archivesListAtomProps: React.ComponentProps<typeof ArchivesListAtom>;
  tagListAtomProps: React.ComponentProps<typeof TagListAtom>;
};

export const AboutBlogListComponent = (props: Props) => {
  return (
    <div className='flex w-full flex-col gap-[40px] lg:w-[27%]'>
      <BloggerProfileAtom {...props.bloggerProfileAtomProps} />
      <div className=' w-full'>
        <h2 className='text-[30px] font-bold text-white'>Search</h2>
        <div className='relative mt-[20px] h-[40px] w-full text-[18px] text-accentGrey2'>
          <SearchOutlined className='absolute bottom-2 right-0 hover:text-accentRed' />
          <input
            className='h-full w-full border-b-2 border-b-white bg-transparent px-[8px] outline-none focus:border-b-accentRed'
            placeholder='Search...'
          />
        </div>
      </div>
      <ListCategoryAtom {...props.listCategoryAtomProps1} />
      <ArchivesListAtom {...props.archivesListAtomProps} />
      <ListCategoryAtom {...props.listCategoryAtomProps2} />
      <TagListAtom {...props.tagListAtomProps} />
    </div>
  );
};
