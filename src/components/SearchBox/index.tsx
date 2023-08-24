import { CancelOutlined, SearchOutlined } from "@mui/icons-material";
import { Button, Form, Input } from "antd";
import React from "react";

import "./index.css";

export interface ISearchForm {
  className: string;
  placeholder: string;
  onSearch: (term: string) => void;
  onClose: () => void;
}

const SearchBox: React.FC<ISearchForm> = ({
  onClose,
  placeholder,
  className,
  onSearch,
}) => {
  const [search, setSearchTerm] = React.useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  return (
    <div>
      <Form
        className={"input w-full flex items-center bg-white " + className}
        name="search-form"
        onFinish={() => {
          setSearchTerm(search);
          onSearch(search);
        }}
      >
        <Button
          className="search-box-button flex justify-center items-center m-1"
          type="text"
          htmlType="submit"
        >
          <SearchOutlined />
        </Button>
        <Input
          className={"input !h-[40px]"}
          onChange={handleInputChange}
          size="large"
          placeholder={placeholder}
          value={search}
        />
        {search && (
          <CancelOutlined
            className="cursor-pointer m-2"
            onClick={() => {
              setSearchTerm("");
              onClose();
            }}
          />
        )}
      </Form>
    </div>
  );
};

export default SearchBox;
