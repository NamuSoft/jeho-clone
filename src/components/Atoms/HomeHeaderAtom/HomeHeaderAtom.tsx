import Link from "next/link";

type Props = {
  link: string;
  // Add props here
};

export const HomeHeaderAtom = (props: Props) => {
  return (
    <li>
      <Link href={"#"}>{props.link}</Link>
    </li>
  );
};
