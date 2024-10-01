import { Button, Form, Input, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import styled from "styled-components";
import { useDispatch } from "react-redux";
// import { isShowingAlerts } from "../../features/alertSlice";
import { isShowingNotification } from "../../features/notificationSlice";

const StyledInput = styled(Input)`
  &:focus {
    border-color: black !important;
    box-shadow: none !important;
  }
`;

const StyledTextArea = styled(TextArea)`
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

export default function ContactUs() {
  const dispatch = useDispatch();

  const [form] = Form.useForm();

  const HandleContactUs = () => {
    dispatch(
      isShowingNotification({
        title: "Berhasil Kirim Pertanyaan",
        message: "Kami akan hubungi anda beberapa hari kedepan",
        status: true,
      })
    );

    // dispatch(
    //   isShowingAlerts({
    //         title: "Gagal",
    //         message: "Kami akan hubungi anda beberapa hari kedepan",
    //         status:true,
    //         type:"error"
    //   })
    // );

    window.scroll(0, 0);
  };

  const onFinish = (values) => {
    window.scroll(0, 0);
    console.log("Form Data:", values);

    message.success("Submit Success!");

    setTimeout(() => {
      HandleContactUs();
    }, 2000);
  };

  const onFinishFailed = () => {
    window.scroll(0, 0);
    message.error("Submit Gagal karena masih ada data yang kosong!");
  };

  return (
    <div className="mx-auto md:my-10 mt-14 md:mt-40 md:text-[22px] text-[14px] px-4 md:px-0 gap-6 font-medium capitalize flex flex-col max-w-4xl">
      <h4>Hubungi Kami</h4>
      <StyleForm
        form={form}
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          name={["user", "name"]}
          label="Nama"
          rules={[
            { required: true, message: "Nama Wajib Diisi!" },
            {
              type: "string",
              min: 6,
              message: "nama minimal harus 6 characters!",
            },
          ]}
        >
          <StyledInput placeholder="Tulis Nama Kamu disini" />
        </Form.Item>
        <Form.Item
          name={["user", "no_wa"]}
          label="No WhatsApp"
          rules={[{ required: true, message: "No Whatsapp Wajib Diisi!" }]}
        >
          <StyledInput placeholder="Tulis Nama Kamu disini" />
        </Form.Item>
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
          name={["user", "pertanyaan"]}
          label="Pertanyaan"
          rules={[{ required: true, message: "Pertanyaan Wajib diisi!" }]}
        >
          <StyledTextArea
            placeholder="Tulis Pertanyaan kamu disini"
            showCount
            rows={6}
            maxLength={400}
          />
        </Form.Item>
        <Form.Item>
          <StyledButton
            className="bg-black border text-white w-[60%] mt-5 h-10 mx-auto"
            htmlType="submit"
          >
            Submit
          </StyledButton>
        </Form.Item>
      </StyleForm>
    </div>
  );
}
