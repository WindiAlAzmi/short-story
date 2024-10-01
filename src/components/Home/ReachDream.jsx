import { FirstData } from "../../datas/DataInfoHome";

export default function ReachDream() {
  const dataHelp = FirstData();
  return (
    <div className="mx-auto md:my-10 mt-28 md:mt-40 md:text-[22px] text-[14px] px-2 md:px-0 gap-6 font-medium capitalize flex flex-col max-w-7xl">
      <h4>We are here to help you to reach your dream!</h4>
      <div className="flex flex-row flex-wrap gap-4 justify-center">
        {dataHelp?.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:w-[20%] w-[40%] gap-4 justify-center items-center"
          >
            <img
              src={`/public/assets/icons/${item.img}`}
              alt="logo"
              className="md:w-[40px] md:h-[44px] h-[30px] w-[30px] cursor-pointer"
            />
            <h3 className="font-normal md:text-[12px] text-[10px] text-[#21272A]lowercase w-[80%]">
              {item.text}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
