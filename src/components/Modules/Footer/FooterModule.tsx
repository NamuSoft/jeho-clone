import Link from "next/link";
import React from "react";
import SVGAtom from "~/components/Atoms/SVGAtom/SVGAtom";
import DiscussionComponent from "~/components/Components/DiscussionComponent/DiscussionComponent";
import { ListTitleComponent } from "~/components/Components/ListTitleComponent/ListTitleComponent";
import { SocialIconComponent } from "~/components/Components/SocialIconComponent/SocialIconComponent";
import SubscribeComponent from "~/components/Components/SubscribeComponent/SubscribeComponent";

type Props = {
  socialComponents: React.ComponentProps<typeof SocialIconComponent>;
  DiscussionComponent: React.ComponentProps<typeof DiscussionComponent>;
  listTitleComponentProps: Array<
    React.ComponentProps<typeof ListTitleComponent>
  >;
  isDiscussion: boolean;
  info: string;
  // Add props here
};

export const FooterModule = (props: Props) => {
  return (
    <>
      {props.isDiscussion && (
        <DiscussionComponent {...props.DiscussionComponent} />
      )}
      <footer className='container mx-auto w-full px-[.7rem] text-accentGrey'>
        <div className='pb-[65px] pt-[95px]'>
          <div className='container'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
              <div className='flex flex-col gap-[20px]'>
                <SVGAtom
                  iconName='logo'
                  color='#FF4A17'
                  width={89}
                  height={30}
                />
                <p className='text-[18px]'>{props.info}</p>
                <SocialIconComponent
                  className='mt-[30px]'
                  {...props.socialComponents}
                />
              </div>

              {props.listTitleComponentProps.map((list, index) => (
                <ListTitleComponent {...list} key={index} />
              ))}

              <SubscribeComponent />
            </div>
          </div>
        </div>
        <div className='container text-[16px] lg:text-[18px]'>
          <div className='flex flex-col items-center justify-between border-t border-t-accentGrey py-[20px] md:flex-row'>
            <p>Copyright © 2024 Laralink.</p>
            <div className='flex items-center gap-[10px] py-[6px]'>
              <Link href={"#"}>Terms of Use</Link>
              <span>|</span>
              <Link href={"#"}>Privacy Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
