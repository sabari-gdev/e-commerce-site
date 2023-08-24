import { Layout } from "antd";
import { Header } from "../header";
import { Content } from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <Layout className="h-[100vh] !bg-white">
      <Header />
      <Content
        className="h-[80vh] p-[24px]"
        style={{
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >
        <Outlet />
      </Content>
      {/* <Footer>Footer</Footer> */}
    </Layout>
  );
};

export default HomeLayout;
