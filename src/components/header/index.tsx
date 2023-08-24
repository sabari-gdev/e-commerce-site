import {
  ExpandMore,
  PersonOutlineOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { Button, Dropdown, Layout, MenuProps, Space } from "antd";
import React from "react";

import "./index.css";
import SearchBox from "../SearchBox";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item (disabled)
      </a>
    ),
    icon: <ExpandMore />,
    disabled: true,
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item (disabled)
      </a>
    ),
    disabled: true,
  },
  {
    key: "4",
    danger: true,
    label: "a danger item",
  },
];

export const Header: React.FC = () => {
  const { Header } = Layout;
  const [search, setSearchTerm] = React.useState("");
  return (
    <Header className="px-6 bg-white flex justify-between items-center h-[10vh]">
      <div>
        <img src="./assets/images/logo.png" alt="Logo" width={100} />
      </div>

      <div>
        <Dropdown menu={{ items }}>
          <a onClick={(e) => e.preventDefault()} href="">
            <Space>
              Shop
              <ExpandMore />
            </Space>
          </a>
        </Dropdown>
        <Button type="text">Most Wanted</Button>
        <Button type="text">New Arrivals</Button>
        <Button type="text">Brands</Button>
      </div>
      <div className="right-action-area">
        <div className="mr-4">
          <SearchBox
            placeholder="Search"
            className={"header-search-bar"}
            onSearch={(e: string) => {
              setSearchTerm(e);
            }}
            onClose={() => setSearchTerm("")}
          />
        </div>

        <ShoppingCartOutlined style={{ marginRight: "8px" }} />
        <PersonOutlineOutlined />
      </div>
    </Header>
  );
};
