import { List } from "antd";
import SVGAtom from "~/components/Atoms/SVGAtom/SVGAtom";
import DividerComponent from "~/components/Components/DividerComponent/DividerComponent";
import { LeftContainerComponent } from "~/components/Components/LeftContainerComponent/LeftContainerComponent";
import type * as svgs from "public/svg";
import { RightContainerComponent } from "~/components/Components/RightContainerComponent/RightContainerComponent";
import { ContactFormComponent } from "~/components/Components/ContactFormComponent/ContactFormComponent";

type Props = {
  leftContainerComponentProps: React.ComponentProps<
    typeof LeftContainerComponent
  >;
  info: Array<{ title: string; iconName: string }>;
};
export const ContactFormSectionModule = (props: Props) => {
  return (
    <>
      <DividerComponent className='h-[80px] lg:h-[145px]' />
      <section className='px-[.75rem]'>
        <div className='container mx-auto w-full'>
          <div className='flex flex-col items-start justify-between gap-[50px] lg:flex-row'>
            <div className='lg:w-[35%] xl:w-[40%]'>
              <LeftContainerComponent {...props.leftContainerComponentProps} />
              <List
                itemLayout='horizontal'
                dataSource={props.info}
                renderItem={(item, index) => (
                  <List.Item key={index}>
                    <List.Item.Meta
                      avatar={
                        <SVGAtom
                          iconName={item.iconName as keyof typeof svgs}
                          width={24}
                          height={24}
                          color='#ff4a17'
                        />
                      }
                      title={
                        <p className='text-[15px] font-medium text-accentGrey'>
                          {item.title}
                        </p>
                      }
                    />
                  </List.Item>
                )}
              />
            </div>
            <RightContainerComponent className='lg:w-[55%] xl:w-[55%]'>
              <ContactFormComponent />
            </RightContainerComponent>
          </div>
        </div>
      </section>
    </>
  );
};
