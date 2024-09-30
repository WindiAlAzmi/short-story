import { FirstData } from "../../datas/DataInfoHome";

export default function ReachDream() {
  const dataHelp = FirstData();
  return (
    <div className="mx-auto my-10  text-[22px] gap-6 font-medium capitalize flex flex-col max-w-7xl">
      <h4>We are here to help you to reach your dream!</h4>
      <div className="flex flex-row gap-4 justify-center">
        {dataHelp?.map((item, index) => (
          <div
            key={index}
            className="flex flex-col w-[20%] gap-4 justify-center items-center"
          >
            <img
              src={`/public/assets/icons/${item.img}`}
              alt="logo"
              className="w-[40px] h-[44px] cursor-pointer"
            />
            <h3 className="font-normal text-[12px] text-gray-600 lowercase w-[80%]">
              {item.text}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
