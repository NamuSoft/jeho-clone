import React from "react";
import { PaginationAtom } from "~/components/Atoms/PaginationAtom/PaginationAtom";

type Props = {
  paginationAtomProps: Array<React.ComponentProps<typeof PaginationAtom>>;
};

export const PaginationComponent = (props: Props) => {
  return (
    <div className='mt-[40px] flex items-center gap-[10px] self-center text-[21px] text-white'>
      {props.paginationAtomProps.map((content, index) => (
        <PaginationAtom key={index} {...content} />
      ))}
    </div>
  );
};
