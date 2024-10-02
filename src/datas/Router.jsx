import Cart from "../pages/Cart";
import Course from "../pages/Course";
import DetailCourse from "../pages/DetailCourse";
import GlamOnTheSpot from "../pages/GlamOnTheSpot";
import Home from "../pages/Home";
import SuccessBuy from "../pages/SuccessBuy";

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
    },
    {
      name: "cart",
      path: "/checkout/:params",
      component: <Cart />,
    },
    {
      name: "success",
      path: "/success-payment",
      component: <SuccessBuy />,
    },
    {
      name: "glam",
      path: "/glam-on-the-spot",
      component: <GlamOnTheSpot/>,
    },
  ];
}
