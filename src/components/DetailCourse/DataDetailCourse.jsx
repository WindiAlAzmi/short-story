import { useEffect, useState } from "react";
import { DataInfoCourse } from "../../datas/DataInfoDetailCourse";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function DataDetailCourse() {
   const dataDetail = useSelector((state) => state.course);
   const [isData, setIsData] = useState({});

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

      setIsData(dataDetail.dataDetailCourses);


      //put desc and materi in filter 
      const getDesc = dataDetail.dataDetailCourses?.desc;
      const getMateri = dataDetail.dataDetailCourses?.materi;
      const putData = putActiveField?.map((item) => {
        if(item.title === "deskripsi") {
          return {...item, desc : [getDesc]}
        } else if(item.title === "materi" ) {
          return {...item, desc : getMateri}      
        }else {
          return item; 
        }
      })

      setDataFilterDetail(putData)

    }, [dataDetail]);



  return (
    <div className="md:w-[30%] w-full text-left flex flex-col justify-center md:justify-start gap-4 md:px-0 px-2">
      <h4 className="md:text-left text-center">{isData?.title}</h4>
      {/* Level */}
      <div className="border rounded-full bg-gray-200 text-black w-[30%]  justify-center flex flex-row gap-2 px-3 py-2">
        <img
          src="/assets/icons/activity-black.png"
          alt="activity"
          className="md:h-[20px]  h-[14px] cursor-pointer"
        />
        <h4 className="text-[12px]">{isData?.level}</h4>
      </div>
      {/* Icons */}
      <div className="flex flex-row justify-start gap-10 md:w-[50%] w-full ">
        <div className="flex flex-row gap-3 md:text-[12px] md:w-1/2 text-[8px] items-center">
          <img
            src="/assets/icons/calendar-black.png"
            alt="img"
            className="md:w-[24px] md:h-[24px] w-[14px] h-[14px] "
          />{" "}
          <h5>{isData?.duration?.date}</h5>
        </div>
        <div className="flex flex-row gap-3 md:text-[12px] text-[8px] md:w-1/2 whitespace-pre items-center">
          <img
            src="/assets/icons/clock.png"
            alt="img"
            className="md:w-[24px] md:h-[24px]  w-[14px] h-[14px]"
          />{" "}
          <h5>{isData?.duration?.time}</h5>
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
              className="md:w-[24px] md:h-[24px] w-[20px] h-[20px] "
            />{" "}
            <h5>
              {isData?.price === "gratis"
                ? isData?.price
                : "Rp" + isData?.price * dataTicket}
            </h5>
          </div>
          <div className="flex flex-row gap-3 md:text-[12px] text-[8px] items-center">
            <img
              src="/assets/icons/minus-square.png"
              alt="img"
              className="md:w-[24px] md:h-[24px] cursor-pointer  w-[20px] h-[20px]"
              onClick={() => dataTicket > 1 && setDataTicket(dataTicket - 1)}
            />{" "}
            <h5>{dataTicket}</h5>
            <img
              src="/assets/icons/plus-square.png"
              alt="img"
              className="md:w-[24px] md:h-[24px] cursor-pointer  w-[20px] h-[20px]"
              onClick={() => setDataTicket(dataTicket + 1)}
            />{" "}
          </div>
        </div>
        {/* Button Daftar  */}
        <Link
          to={`/checkout/${isData?.id}`}
          className="rounded-[10px] h-10 px-6 py-2  text-center text-base text-white  bg-black"
        >
          Daftar
        </Link>
        {/* <div className="rounded-[10px] h-10 px-6 py-2  text-center text-base text-white  bg-black">
          Daftar
        </div> */}
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
