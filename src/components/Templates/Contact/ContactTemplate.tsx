import { ContactFormSectionModule } from "~/components/Modules/Contact/ContactFormSectionModule";
import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { HeaderModule } from "~/components/Modules/Header/HeaderModule";
import { FooterModule } from "~/components/Modules/Footer/FooterModule";
import { MapAreaModule } from "~/components/Modules/MapArea/MapAreaModule";

type Props = {
  headerModuleProps: React.ComponentProps<typeof HeaderModule>;
  footerModuleProps: React.ComponentProps<typeof FooterModule>;
  contactFormSectionModuleProps: React.ComponentProps<
    typeof ContactFormSectionModule
  >;
};

export const ContactTemplate = (props: Props) => {
  return (
    <Layout
      style={{
        height: "100%",
        backgroundColor: "transparent",
        overflow: "hidden",
        color: "white",
      }}
    >
      <HeaderModule {...props.headerModuleProps} />

      <Content style={{ overflow: "auto" }}>
        <ContactFormSectionModule {...props.contactFormSectionModuleProps} />
        <MapAreaModule />
      </Content>

      <FooterModule {...props.footerModuleProps} />
    </Layout>
  );
};
