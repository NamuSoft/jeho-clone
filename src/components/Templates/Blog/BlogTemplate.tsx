import { BlogListAreaModule } from "~/components/Modules/Blog/BlogListAreaModule";
import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { FooterModule } from "~/components/Modules/Footer/FooterModule";
import { HeaderModule } from "~/components/Modules/Header/HeaderModule";

type Props = {
  blogListAreaModuleProps: React.ComponentProps<typeof BlogListAreaModule>;
  footerModuleProps: React.ComponentProps<typeof FooterModule>;
  headerModuleProps: React.ComponentProps<typeof HeaderModule>;
};

export const BlogTemplate = (props: Props) => {
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
        <BlogListAreaModule {...props.blogListAreaModuleProps} />
      </Content>

      <Footer
        style={{
          backgroundColor: "transparent",
          overflow: "hidden",
          color: "white",
          padding: 0,
        }}
      >
        <FooterModule {...props.footerModuleProps} />
      </Footer>
    </Layout>
  );
};
