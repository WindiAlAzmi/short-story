/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import BodyCourse from "../components/Course/BodyCourse";
import HeaderCourse from "../components/Course/HeaderCourse";
import { DataDummy } from "../datas/DataCourseDummy";
import { addCourses } from "../features/coursesSlice";
import { useDispatch } from "react-redux";

export default function Course() {
  const dispatch = useDispatch();

    const hitAPICourse = async () => {
      try {
        const data = DataDummy();
        // console.log(data, "ini data dummy cpurses");
        //  const data = await getAllCourses();
        //  console.log(data, 'ini daat');
        dispatch(addCourses(data));
      } catch (error) {
        console.error("failed", error);
      }
    };

    useEffect(() => {
      hitAPICourse();
    }, []);

  return (
   <>
     <HeaderCourse />
     <BodyCourse />
   </>
  )
}
