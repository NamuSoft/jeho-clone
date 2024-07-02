import { type Dispatch, type SetStateAction } from "react";
import "./custom.css";
type Props = {
  tags: string[];
  setActiveTag: Dispatch<SetStateAction<string>>;
  activeTag: string;
};
export const PortfolioTagsComponents = (props: Props) => {
  const { tags, setActiveTag, activeTag } = props;
  return (
    <div className='mb-[10px] flex flex-wrap items-center gap-[13px] border-b border-b-[#999696] pb-[10px]'>
      {tags.map((tag, index) => (
        <button
          onClick={() => setActiveTag(tag)}
          className={`${activeTag === tag ? "active-port text-accentRed" : "text-accentGrey2"} relative text-[16px]`}
          key={index}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};
