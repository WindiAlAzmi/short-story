import { Pagination } from "antd";
import styled from "styled-components";

const StyledPagination = styled(Pagination)`
  background-color: lightgray;
  width: 300px;

  .ant-pagination-item a {
    color: black;
  }

  .ant-pagination-item-active a {
    color: white;
  }

  .ant-pagination-item {
    background-color: white;
    border-color: white;
  }

  .ant-pagination-item-active {
    background-color: black;
    color: white;
    border-color: black;
  }
`;

export default function PaginationComponent() {

  const changeData = (page) => {
    console.log('jalannnn', page)
  }
  return (
    <>
      <StyledPagination
        align="center"
        defaultCurrent={1}
        total={50}
        onChange={changeData}
      />
    </>
  );
}
