import { MapIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useShowingNotifications from "../hooks/useShowingNotifications";
import useShowingAlert from "../hooks/useShowingAlert";
import { Alert } from "antd";
import { useState } from "react";
import { MenuItem } from "../datas/DataInfoHome";

export default function Header() {
  const [showMobileNavbar, setShowMobileNavbar] = useState(false);

  const navigate = useNavigate();
  //data notification
  const dataNotification = useSelector((state) => state.notification);
  const { contextHolder } = useShowingNotifications(dataNotification);

  //data alerts
  const isDataAlerts = useSelector((state) => state.alert);
  const { data, isAlertThere } = useShowingAlert(isDataAlerts.dataAlerts);

  let AllMenuItem = MenuItem();

  return (
    <div className="md:max-w-7xl w-full mx-auto md:px-0 px-4 flex flex-row justify-between items-center md:relative fixed z-[999] bg-white">
      {contextHolder}
      {/* Alert */}
      {isAlertThere && (
        <div className="absolute -right-48 top-10 z-40 w-[500px]">
          <Alert
            message={data?.title}
            description={data?.message}
            type={data?.type}
            showIcon
            closable
            className="w-full"
          />
        </div>
      )}
      {/* Logo */}
      <img
        src="/assets/image/logo-brand.png"
        alt="logo"
        className="w-[190px] h-auto cursor-pointer"
        onClick={() => navigate("/")}
      />
      <div
        onClick={() => setShowMobileNavbar(!showMobileNavbar)}
        className="cursor-pointer md:hidden flex flex-row w-[10%] justify-center"
      >
        <img
          src="/assets/icons/menu.png"
          alt="logo"
          className="w-[30px] h-auto"
          onClick={() => navigate("/")}
        />
      </div>
      {/* Nav Mobile */}
      {showMobileNavbar && (
        <div className="shadow-md  py-4 rounded h-fit top-0 fixed z-[999] inset-0 bg-white">
          <div className="flex flex-row items-center justify-between px-6">
            <img
              src="/assets/image/logo-brand.png"
              alt="logo"
              className="w-[190px] h-auto cursor-pointer"
              onClick={() => navigate("/")}
            />
            <XMarkIcon
              className="h-5 w-5"
              onClick={() => setShowMobileNavbar(false)}
            />
          </div>

          <div className="text-[12px] text-left my-5 px-6 flex flex-col gap-3">
            {AllMenuItem?.map((item, index) => (
              <NavLink key={index} to={item.path}>
                <div>{item?.label}</div>
              </NavLink>
            ))}
          </div>
        </div>
      )}

      {/* Nav */}
      <div className=" text-black text-xl hidden md:flex flex-row gap-4 ">
        <NavLink to="/kursus">
          <div className="h-10">
            <h3>Kursus</h3>
          </div>
        </NavLink>
        <div className="h-10">
          <MapIcon className="w-10 h-8" />
        </div>
        <div className="h-10">
          <img
            src="/assets/icons/flag.png"
            alt="logo"
            className="w-[40px] h-[30px]"
          />
        </div>
      </div>
      {/* Daftar & Login */}
      <div className=" hidden md:flex flex-row gap-4">
        <div className="rounded-[10px] h-10 px-6 py-2  text-center text-base border border-black text-black ">
          Log In
        </div>
        <div className="rounded-[10px] h-10 px-6 py-2  text-center text-base text-white  bg-black">
          Daftar
        </div>
      </div>
    </div>
  );
}
