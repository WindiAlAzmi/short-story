/* eslint-disable react-hooks/exhaustive-deps */
import SliderDetailCourse from "../components/DetailCourse/SliderDetailCourse";
import DataDetailCourse from "../components/DetailCourse/DataDetailCourse";
import BodyDetailCourse from "../components/DetailCourse/BodyDetailCourse";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { DataDummy } from "../datas/DataCourseDummy";
import { useDispatch } from "react-redux";
import { addDetailCourse } from "../features/coursesSlice";
import { setLoading } from "../features/generalSlice";

export default function DetailCourse() {
  const paramsData = useParams();
  const dispatch = useDispatch();

  const handleData = () => {
    const getDummyData = DataDummy();
    const findData = getDummyData?.find((item) => item.id === paramsData.params)
    if(findData !== undefined) dispatch(addDetailCourse(findData))

  }
  useEffect(() => {
    window.scroll(0, 0);
    handleData();
    dispatch(setLoading(true));

  }, [paramsData])

  return (
    <div className="w-full mx-auto md:my-10 mt-24 md:mt-20 md:text-[22px] text-[14px] px-2 md:px-0 gap-14 font-medium capitalize flex flex-col md:gap-10 md:justify-between justify-center max-w-7xl">
      <div className="flex md:flex-row flex-col md:gap-5 gap-4 justify-center">
        <div className="flex flex-col md:w-[65%] w-full md:gap-20 gap-6">
          <SliderDetailCourse />
          <BodyDetailCourse />
        </div>
        <DataDetailCourse />
      </div>
    </div>
  );
}
