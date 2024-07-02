import { HeaderAtom } from "../../Atoms/HeaderAtom/HeaderAtom";
import "./custom.css";
type Props = {
  headerAtomProps: React.ComponentProps<typeof HeaderAtom>;
  bgImage: string;
};

export const HeaderComponent = (props: Props) => {
  return (
    <header
      className={`large-bg relative h-[425px] w-full ${props.bgImage} bg-cover bg-[50%] bg-no-repeat pb-[50px] pt-[120px] md:h-[650px]`}
    >
      <div className='container mx-auto flex h-full items-center justify-center'>
        <HeaderAtom {...props.headerAtomProps} />
        {/* <div className='absolute right-0 top-0 h-[151px] w-[151px] bg-accentRed opacity-80 blur-[125px]' /> */}
      </div>
    </header>
  );
};
