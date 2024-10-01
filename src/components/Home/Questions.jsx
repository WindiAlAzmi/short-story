import { Collapse } from "antd";
import { FrequentlyAskedQuestions } from "../../datas/DataInfoHome";
import styled from "styled-components";

const StyledCollapse = styled(Collapse)`
  .ant-collapse-header {
    background-color:black !important;
    color: white; !important;
    border-radius:10px;
  }

   .ant-collapse-header-text, .ant-collapse-expand-icon {
    text-align:left;
    color: white; !important;
  }


  .ant-collapse-content {
    background-color: white;
    text-align:left;

  }

`;

export default function Questions() {
  const dataQuestions = FrequentlyAskedQuestions();

  const handleQuestions = (key) => {
    console.log("update", key);
  };
  return (
    <div className="mx-auto md:my-10 mt-14 md:mt-40 md:text-[22px] text-[14px] px-2 md:px-0 gap-6 font-medium capitalize flex flex-col max-w-4xl">
      <h4>Pertanyan yang sering ditanyakan</h4>
      <StyledCollapse
        headerBg="#fffff"
        items={dataQuestions}
        onChange={handleQuestions}
        className="my-4"
      />
    </div>
  );
}
