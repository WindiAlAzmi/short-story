/* eslint-disable react/prop-types */
import { useSelector } from "react-redux"
import { Link } from "react-router-dom";

export default function DataCourse(props) {
  let {isFilterActive} = props;
  const dataStateCourse = useSelector((state) => state.course);  

  return (
    <div
      className={`h-fit flex md:flex-row mt-4 md:mt-0 flex-col ${
        isFilterActive
          ? "md:w-[70%] w-full justify-start"
          : "w-full justify-center"
      } flex-wrap gap-10`}
    >
      {dataStateCourse?.dataCourses?.length !== 0 &&
        dataStateCourse?.dataCourses?.map((item, index) => (
          <Link
            key={index}
            to={`/kursus/${item.id}`}
            className={`border px-1 py-1 rounded-[4px] ${
              isFilterActive ? "md:w-[26%] w-full" : "md:w-[17%] w-full"
            }  h-fit flex md:flex-col flex-row cursor-pointer items-center gap-2 md:gap-1`}
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
  );
}
