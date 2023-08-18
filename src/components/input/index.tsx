import { Form, Input } from "antd";
import { Rule } from "antd/es/form";
import React from "react";

import "./index.css";
import { VisibilityOffOutlined, VisibilityOutlined } from "@mui/icons-material";

export interface IInputForm {
  label: string | undefined;
  placeholder: string | undefined;
  type?: string;
  className: string;
  name: string;
  rules: Rule[];
  disabled?: boolean;
}

const TextInputField: React.FC<IInputForm> = ({
  type,
  name,
  label,
  placeholder,
  disabled,
  rules,
  className,
}) => {
  return (
    <Form.Item name={name} rules={rules} label={label}>
      {type === "password" ? (
        <Input.Password
          className={"input " + className}
          placeholder={placeholder}
          size="large"
          iconRender={(visible: boolean) =>
            visible ? <VisibilityOutlined /> : <VisibilityOffOutlined />
          }
        />
      ) : (
        <Input
          className={"input " + className}
          size="large"
          placeholder={placeholder}
          type={type}
          disabled={disabled}
        />
      )}
    </Form.Item>
  );
};

export default TextInputField;
