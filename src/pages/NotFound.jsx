import { Link, useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-screen mx-auto items-center  justify-center">
      <img
        src="/assets/icons/notfound.png"
        alt="logo"
        className="md:w-3/6 w-full  md:h-[880px] h-[400px] mx-auto -mt-20 cursor-pointer"
        onClick={() => navigate("/")}
      />
      <p className="w-5/6 mx-auto md:text-2xl -mt-20 text-xs">
        Maaf halaman yang kamu cari ga ada 😥 <Link to="/" className="underline">kembali ke halaman awal</Link>
      </p>
    </div>
  );
}
