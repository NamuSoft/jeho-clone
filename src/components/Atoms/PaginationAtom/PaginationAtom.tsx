import { RightOutlined } from "@ant-design/icons";
import Link from "next/link";
import { type ReactNode } from "react";

type Props = {
  content: number | ReactNode;
};

export const PaginationAtom = (props: Props) => {
  return (
    <Link
      href={"#"}
      className={`flex h-[40px] w-[40px] items-center justify-center rounded-[10px] ${props.content === 1 ? "bg-accentRed" : "bg-black"} hover:text-accentRed`}
    >
      {props.content !== 5 ? props.content : <RightOutlined />}
    </Link>
  );
};
