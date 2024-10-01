import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DataInfoCourse } from "../../datas/DataInfoDetailCourse";

export default function DataDetailCourse() {
  const getParams = useParams();
  const [dataFilterDetail, setDataFilterDetail] = useState([]);
  const [dataTicket, setDataTicket] = useState(1);

  const updateFieldActive = (dt) => {
    if (dt.isActive === false) {
      const putNewActiveField = dataFilterDetail?.map((item) =>
        item.id === dt.id ? { ...item, isActive: true } : item
      );
      setDataFilterDetail(putNewActiveField);
    } else {
      const putNewActiveField = dataFilterDetail?.map((item) =>
        item.id === dt.id ? { ...item, isActive: false } : item
      );
      setDataFilterDetail(putNewActiveField);
    }
  };

  useEffect(() => {
    const getDataInfoDetail = DataInfoCourse();
    const putActiveField = getDataInfoDetail?.map((item) => ({
      ...item,
      isActive: false,
    }));
    setDataFilterDetail(putActiveField);
  }, []);

  return (
    <div className=" md:w-[30%] w-full text-left flex flex-col justify-center md:justify-start gap-4 md:px-0 px-2">
      <h4 className="md:text-left text-center">Makeup Sederhana {getParams?.params}</h4>
      {/* Level */}
      <div className="border rounded-full bg-gray-200 text-black w-[30%] flex flex-row gap-2 px-5 py-2">
        <img
          src="/assets/icons/activity-black.png"
          alt="activity"
          className="md:w-[20px] md:h-[20px] w-[12px] h-[14px] cursor-pointer"
        />
        <h4 className="text-[12px]">Pemula</h4>
      </div>
      {/* Icons */}
      <div className="flex flex-row justify-start gap-10 md:w-[50%] w-full">
        <div className="flex flex-row gap-3 md:text-[12px] text-[8px] items-center">
          <img
            src="/assets/icons/calendar-black.png"
            alt="img"
            className="md:w-[24px] md:h-[24px] w-[14px] h-[14px] "
          />{" "}
          <h5>22/04</h5>
        </div>
        <div className="flex flex-row gap-3 md:text-[12px] text-[8px] items-center">
          <img
            src="/assets/icons/clock.png"
            alt="img"
            className="md:w-[24px] md:h-[24px]  w-[14px] h-[14px]"
          />{" "}
          <h5>08 pagi</h5>
        </div>
      </div>
      {/* Daftar Tombol */}
      <div className="flex flex-col mt-4 gap-8 md:w-[80%] w-full mx-auto md:mx-0 py-4 px-2 rounded-md border border-gray-500 shadow-xl">
        {/* Counter  */}
        <div className="flex flex-row justify-between gap-10 w-full">
          <div className="flex flex-row gap-3 md:text-[12px] text-[8px] items-center">
            <img
              src="/assets/icons/dollar-black.png"
              alt="img"
              className="md:w-[24px] md:h-[24px] w-[14px] h-[14px] "
            />{" "}
            <h5>Rp {20500 * dataTicket}</h5>
          </div>
          <div className="flex flex-row gap-3 md:text-[12px] text-[8px] items-center">
            <img
              src="/assets/icons/minus-square.png"
              alt="img"
              className="md:w-[24px] md:h-[24px] cursor-pointer  w-[14px] h-[14px]"
              onClick={() => dataTicket > 1 && setDataTicket(dataTicket - 1)}
            />{" "}
            <h5>{dataTicket}</h5>
            <img
              src="/assets/icons/plus-square.png"
              alt="img"
              className="md:w-[24px] md:h-[24px] cursor-pointer  w-[14px] h-[14px]"
              onClick={() => setDataTicket(dataTicket + 1)}
            />{" "}
          </div>
        </div>
        {/* Button Daftar  */}
        <div className="rounded-[10px] h-10 px-6 py-2  text-center text-base text-white  bg-black">
          Daftar
        </div>
      </div>
      {/* Daftar List */}
      <div className="flex flex-col w-full  flex-wrap gap-4">
        {dataFilterDetail?.map((item, index) => (
          <>
            <div
              key={index}
              onClick={() => updateFieldActive(item)}
              className="rounded-md cursor-pointer border border-gray-400  md:w-[80%] w-full md:text-[15px] text-[12px] px-2 py-2 items-center flex flex-row justify-between"
            >
              <h4>{item?.title}</h4>
              <img
                src="/assets/icons/plus.png"
                alt="logo"
                className="w-[18px] h-[14px] cursor-pointer"
              />
            </div>
            {item?.isActive && (
              <div className="md:text-[12px] text-[10px] w-[80%]">
                {item?.desc}
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  );
}
