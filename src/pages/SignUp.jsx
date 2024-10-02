import { Button, Form, Input, message } from "antd";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { saveDataToLocalStorage } from "../utils/localStorageFunc";

const StyledInput = styled(Input)`
  &:focus {
    border-color: black !important;
    box-shadow: none !important;
  }
`;

const StyledButton = styled(Button)`
  &.ant-btn:active,
  &.ant-btn:hover {
    background-color: #000000 !important;
    border-color: #000000 !important;
    color: white !important;
  }
`;

const StyleForm = styled(Form)`
  .ant-form-item-explain-error {
    text-align: left !important;
  }
`;

export default function SignUp() {
  const navigate = useNavigate();

  const [form] = Form.useForm();

  const onFinish = (values) => {
    window.scroll(0, 0);
    saveDataToLocalStorage("user-data", values)

    message.success("Berhasil!");

    navigate("/login");
  };

  const onFinishFailed = () => {
    window.scroll(0, 0);
    message.error("Submit Gagal karena masih ada data yang tidak valid!");
  };

  return (
    <div className="h-screen w-screen overflow-x-hidden flex flex-row items-center bg-white/80">
      <div className="bg-white px-4 rounded-[10px] shadow-2xl items-center h-[600px] md:w-1/2 w-5/6 mx-auto md:text-[22px] text-[14px]  font-medium capitalize flex md:flex-row flex-col gap-10  md:gap-10 md:justify-between justify-center max-w-7xl">
        <div className="md:h-4/6 h-[40%] md:w-[50%] w-full">
          <img
            src="/assets/background/SignUpNew.png"
            alt="logo"
            className="w-full h-full cursor-pointer"
          />
        </div>
        <div className="md:w-[50%] w-full h-[50%] flex flex-col items-start -mt-10 mb-10 md:mt-0">
          <div className="mx-auto md:text-[22px] text-[14px] gap-6 font-medium capitalize flex flex-col w-full">
            <h4>Daftar</h4>
            <StyleForm
              form={form}
              layout="vertical"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                name={["user", "email"]}
                label="Email"
                rules={[
                  { required: true, message: "Email Wajib Diisi!" },
                  { type: "email", message: "Ini Bukan Email yang Valid!" },
                ]}
              >
                <StyledInput placeholder="Tulis Nama Kamu disini" />
              </Form.Item>
              <Form.Item
                name={["user", "password"]}
                label="password"
                rules={[
                  { required: true, message: "password Wajib Diisi!" },
                  {
                    type: "string",
                    min: 6,
                    message: "password minimal harus 6 characters!",
                  },
                ]}
              >
                <StyledInput.Password placeholder="Tulis Password Kamu Disini" />
              </Form.Item>
              <Form.Item>
                <StyledButton
                  className="bg-black border text-white w-[60%] mt-5 h-10 mx-auto"
                  htmlType="submit"
                >
                  Daftar
                </StyledButton>
              </Form.Item>
            </StyleForm>
          </div>
          <div className="text-[12px]">
            sudah punya akun ?{" "}
            <Link to="/login" className="underline  underline-offset-1 ">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
