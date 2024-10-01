import Course from "../pages/Course";
import DetailCourse from "../pages/DetailCourse";
import Home from "../pages/Home";

export default function Router() {
  return [
    {
      name: "home",
      path: "/",
      component: <Home />,
    },
    {
      name: "kursus",
      path: "/kursus",
      component: <Course />,
    },
    {
      name: "detail kursus",
      path: "/kursus/:params",
      component: <DetailCourse />,
    }
  ];
}
