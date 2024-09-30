import { MapIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();


  return (
    <div className="max-w-7xl m-auto flex flex-row justify-between items-center">
      {/* Logo */}
        <img
          src="/public/assets/image/logo-brand.png"
          alt="logo"
          className="w-[190px] h-auto cursor-pointer"
          onClick={() => navigate("/")}
        />
      {/* Nav */}
      <div className=" text-black text-xl flex flex-row gap-4 ">
        <div className="h-10">
          <h3>Kursus</h3>
        </div>
        <div className="h-10">
          <MapIcon className="w-10 h-8" />
        </div>
        <div className="h-10">
          <img
            src="/public/assets/icons/flag.png"
            alt="logo"
            className="w-[40px] h-[30px]"
          />
        </div>
      </div>
      {/* Daftar & Login */}
      <div className="flex flex-row gap-4">
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
