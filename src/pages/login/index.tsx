import { Col, Form, Row } from "antd";
import TextInputField from "../../components/input";
import { ILoginForm } from "../../interfaces/loginInterface";
import "./index.css";
import FilledRoundButton from "../../components/button";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [form] = Form.useForm<ILoginForm>();
  const { isProcessingLogin } = useAppSelector((state) => state.authentication);

  const handleFormSubmit = (values: ILoginForm) => {
    console.log("Values: ", values);
  };

  return (
    <div className="login-container">
      <div className="left-content">
        <Row justify={"center"}>
          <Col span={12}>
            <div>
              <img
                src="./assets/images/logo.png"
                alt="logo"
                width={100}
                height={100}
              />
            </div>
            <div className="title-section">
              <h2 className="login-title">Login</h2>
              <p className="login-subtitle">
                Welcome back! Please fill your details
              </p>
            </div>
            <div>
              <Form<ILoginForm>
                form={form}
                layout="vertical"
                initialValues={{ remember: false }}
                onFinish={handleFormSubmit}
              >
                <TextInputField
                  name="email"
                  label="Email Address"
                  className="login-input h-[56px]"
                  placeholder="Enter Email Address"
                  rules={[
                    {
                      type: "email",
                      message: "Enter valid email",
                    },
                    {
                      required: true,
                      message: "Email required",
                    },
                  ]}
                />
                <TextInputField
                  name="password"
                  label="Password"
                  className="login-input h-[56px]"
                  placeholder="Enter Password"
                  type="password"
                  rules={[
                    {
                      required: true,
                      message: "Password required",
                    },
                    {
                      min: 8,
                      message: "Password should be at least 8 characters!",
                    },
                  ]}
                />
                <Row>
                  <FilledRoundButton loading={isProcessingLogin}>
                    Login
                  </FilledRoundButton>
                </Row>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
      <div className="right-content" />
    </div>
  );
};

export default LoginPage;
