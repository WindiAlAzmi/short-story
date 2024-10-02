import {  XMarkIcon } from "@heroicons/react/24/outline";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useShowingNotifications from "../hooks/useShowingNotifications";
import useShowingAlert from "../hooks/useShowingAlert";
import { Alert } from "antd";
import { useEffect, useState } from "react";
import { MenuItem } from "../datas/DataInfoHome";
import { getDataFromLocalStorage, removeDataFromLocalStorage } from "../utils/localStorageFunc";
import { isShowingNotification } from "../features/notificationSlice";

export default function Header() {
  const [showMobileNavbar, setShowMobileNavbar] = useState(false);
  const [isDataUser, setIsDataUser] = useState(null);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  //data notification
  const dataNotification = useSelector((state) => state.notification);
  const { contextHolder } = useShowingNotifications(dataNotification);

  //data alerts
  const isDataAlerts = useSelector((state) => state.alert);
  const { data, isAlertThere } = useShowingAlert(isDataAlerts.dataAlerts);

  let AllMenuItem = MenuItem();

  useEffect(() => {
     const getResultLocalStorage = getDataFromLocalStorage("user-data");
     setIsDataUser(getResultLocalStorage);
  }, [])


  const handleRemove = () => {
    setIsDataUser(null)
    navigate("/");
    removeDataFromLocalStorage("user-data");
    setTimeout(() => {
      if (isDataUser === null) {
        window.scroll("0, 0");
        navigate("/");
      }

        dispatch(
          isShowingNotification({
            title: "berhasil logout",
            message: "",
            status: true,
          })
        );
    }, 1000)
  }

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
              <Link key={index} to={item.path}>
                <div>{item?.label}</div>
              </Link>
            ))}
          </div>
          <div className=" flex px-6 justify-start items-start flex-col gap-4">
            {isDataUser === null ? (
              <>
                <Link
                  className="rounded-[10px] w-full mx-auto  px-6 py-2  text-center text-sm border border-black text-black "
                  to="/login"
                >
                  Log In
                </Link>
                <Link
                  className="rounded-[10px] w-full mx-auto px-6 py-2  text-center text-sm text-white  bg-black"
                  to="/signup"
                >
                  Daftar
                </Link>
              </>
            ) : (
              <div className="flex flex-col text-[12px] justify-start gap-4">
                <h3>{isDataUser?.user?.email}</h3>
                <div
                  onClick={() => handleRemove()}
                  className="rounded-[10px]  px-6 py-2  text-center text-sm text-white cursor-pointer bg-black"
                >
                  Keluar
                </div>
              </div>
            )}
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
        <NavLink to="/glam-on-the-spot">
          <div className="h-10">
            <h3> Glam On The Spot</h3>
          </div>
        </NavLink>
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
        {isDataUser === null ? (
          <>
            <Link
              className="rounded-[10px] h-10 px-6 py-2  text-center text-base border border-black text-black "
              to="/login"
            >
              Log In
            </Link>
            <Link
              className="rounded-[10px] h-10 px-6 py-2  text-center text-base text-white  bg-black"
              to="/signup"
            >
              Daftar
            </Link>
          </>
        ) : (
          <div className="hidden md:flex flex-row gap-4">
            <h3>{isDataUser?.user?.email}</h3>
            <div onClick={() => handleRemove()} className="cursor-pointer">
              Keluar
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
