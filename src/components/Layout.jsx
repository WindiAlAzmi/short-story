import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ModalComponent from "./ModalComponent";
// import LoadingComponent from "./LoadingComponent";

export default function Layout() {

  return (
    <div className="w-full border relative">
      <Header />
      <ModalComponent />
      <Outlet />
      <Footer />
      {/* <LoadingComponent /> */}
    </div>
  );
}
