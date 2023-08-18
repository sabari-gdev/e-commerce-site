import { Button, Spin } from "antd";
import "./index.css";

import React from "react";

export interface IInputForm {
  loading?: boolean;
  width?: string;
  height?: string;
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
}

const FilledRoundButton: React.FC<IInputForm> = ({
  disabled,
  children,
  loading,
  onClick,
}) => {
  return (
    <Button
      block
      className={"button h-[56px]"}
      type="primary"
      size="large"
      htmlType="submit"
      onClick={() => onClick && onClick()}
      disabled={disabled}
    >
      {loading ? <Spin /> : <div className="button-text">{children}</div>}
    </Button>
  );
};

export default FilledRoundButton;
