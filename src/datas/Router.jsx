import Greeting from "../pages/Greating";
import Home from "../pages/Home";

export default function Router() {
  return [
    {
      name: "home",
      path: "/",
      component: <Home />,
    },
    {
      name: "greeting",
      path: "/greating",
      component: <Greeting name="red"  />,
    },
  ];
}
