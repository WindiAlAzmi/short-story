import { useEffect, useState } from "react";
import { DataBankPayment } from "../../datas/DataInfoPayment";
import styled from "styled-components";
import { Input } from "antd";

//table
const StyledInput = styled(Input)`
  &:focus {
    border-color: black !important;
    box-shadow: none !important;
  }
`;

export default function PaymentMethod() {
 const [dataFilterDetail, setDataFilterDetail] = useState([]);

  const updateFieldActive = (dt) => {
    if (dt.isActive === false) {
      const putNewActiveField = dataFilterDetail?.map((item) =>
        item.id === dt.id ? { ...item, isActive: true } : {...item, isActive: false}
      );
      setDataFilterDetail(putNewActiveField);
    } else {
      const putNewActiveField = dataFilterDetail?.map((item) =>
        item.id === dt.id ? { ...item, isActive: false } : {...item, isActive: false}
      );
      setDataFilterDetail(putNewActiveField);
    }
  };


 useEffect(() => {
    const getPayment = DataBankPayment();
    const putActiveField = getPayment?.map((item) => ({
         ...item,
         isActive: false,
  }));

    setDataFilterDetail(putActiveField);
 }, []);


  return (
    <div className="w-full text-left flex flex-col justify-center md:justify-start gap-4 md:px-0 px-2">
      {/* Daftar Payment Method */}
      <div className="flex flex-col mt-4 gap-8 md:w-[90%] w-full mx-auto md:mx-0 py-4 px-2 rounded-md ">
        {/* method payment */}
        <div className="flex flex-col justify-between gap-2 w-full">
          <h4 className="md:text-left text-center ">Pilih Metode Pembayaran</h4>
          <hr className="border border-black mb-4 " />
          <div className="flex flex-col w-full  flex-wrap gap-4">
            {dataFilterDetail?.map((item, index) => (
              <>
                <div
                  key={index}
                  onClick={() => updateFieldActive(item)}
                  className="rounded-md cursor-pointer border border-gray-400  md:w-[100%] w-full md:text-[15px] text-[12px] px-2 py-2 items-center flex flex-row justify-between"
                >
                  <h4>{item?.title}</h4>
                  <img
                    src="/assets/icons/plus.png"
                    alt="logo"
                    className="w-[18px] h-[14px] cursor-pointer"
                  />
                </div>
                {item?.isActive && (
                  <div className="md:text-[12px] mt-2 text-[10px] text-gray-600 flex flex-col gap-3 w-[100%]">
                    <div className="flex flex-col gap-4">
                      <h4>Nama Pemilik Rekening:</h4>
                      <StyledInput placeholder="Tulis Nama Kamu disini" />
                    </div>
                    <div className="flex flex-col gap-4">
                      <h4>Nomer Rekening:</h4>
                      <StyledInput type="number" placeholder="Tulis Nomer Rekening disini" />
                    </div>
                  </div>
                )}
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
