import { Link } from "react-router-dom";
import { DataDummy } from "../../datas/DataCourseDummy";

export default function ChooseRightNow() {
  const dataGlam = DataDummy();

  return (
    <div className="mx-auto md:my-4 mt-14 md:mt-20 md:text-[22px] text-[14px] px-2 md:px-0 gap-6 font-medium capitalize flex flex-col max-w-7xl">
      <h4 className="text-center md:px-40 px-0 mb-5 mt-8">Pilih Sekarang! </h4>
      <div
        className="w-full md:h-[1400px] h-fit bg-center bg-fixed bg-cover rounded-xl py-10 px-4 flex flex-row flex-wrap justify-center gap-4"
        style={{ backgroundImage: `url('/assets/img/roll2.jpg')` }}
      >
        {dataGlam?.map((item, index) => (
          <Link
            key={index}
            to={`/kursus/${item.id}`}
            className={`border rounded-[4px] overflow-hidden md:w-[20%] w-full  bg-white shadow-xl px-2 py-2
             h-fit flex md:flex-col flex-row cursor-pointer items-center gap-2 md:gap-1`}
          >
            <img
              src={item?.headline_img}
              alt="img"
              className="md:w-full w-[50%] md:h-[130px] h-[100px] md:rounded-t-md rounded-md"
            />
            {/* Desc */}
            <div className=" w-full flex flex-col gap-3 h-fit ">
              {/* Teks */}
              <div className="flex flex-col justify-start text-left px-1 text-[12px]">
                <h4 className="md:text-[14px] text-[12px]">{item?.title}</h4>
                <h5 className="text-gray-600">{item?.location}</h5>
                <h5 className="md:text-[12px] text-[10px]">{item?.price}</h5>
              </div>
              {/* Icon */}
              <div className="flex flex-row justify-between gap-3 w-full">
                <div className="flex flex-row gap-3 md:text-[10px] text-[8px] items-center">
                  <img
                    src="/assets/icons/calendar-black.png"
                    alt="img"
                    className="w-[14px] h-[14px]"
                  />{" "}
                  <h5>{item?.duration?.date}</h5>
                </div>
                <div className="flex flex-row gap-3 md:text-[10px] text-[8px] items-center">
                  <img
                    src="/assets/icons/clock.png"
                    alt="img"
                    className="w-[14px] h-[14px]"
                  />{" "}
                  <h5>{item?.duration?.time}</h5>
                </div>
              </div>
              {/* Face */}
              <div className="flex flex-row md:text-[14px] text-[12px] justify-start gap-4 items-center">
                <img
                  src={item?.image_mentor}
                  alt="img"
                  className="w-[40px] h-[36px] rounded-full"
                />{" "}
                <h5>Windi</h5>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
