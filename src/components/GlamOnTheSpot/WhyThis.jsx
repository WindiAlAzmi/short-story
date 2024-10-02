import { DataWhyThis } from "../../datas/DataGlamOnTheSpot";

export default function WhyThis() {
   const dataArr = DataWhyThis();
   console.log(dataArr, 'ini data arr');

  return (
    <div className="mx-auto md:my-4 mt-14 md:mt-20 md:text-[22px] text-[14px] px-2 md:px-0 gap-6 font-medium capitalize flex flex-col max-w-7xl">
      <h4 className="text-left md:px-40  px-10 mb-5 mt-8">
        Kenapa harus mengikuti ini ?
      </h4>
      <div className="flex flex-row flex-wrap items-center justify-center gap-10">
        {dataArr?.map((item, index) => (
          <div key={index} className="rounded-md relative">
            <div
              className="md:h-[300px] md:w-[300px] h-[280px] w-[300px] bg-cover relative rounded-xl"
              style={{ backgroundImage: `url(${item?.img})` }}
            >
              <div className="cursor-pointer opacity-0 hover:opacity-100 w-full rounded-b-xl absolute inset-0 z-[99]">
                <div className="absolute bottom-0 inset-0 top-48 bg-[#DAC8AF] py-4 px-2 md:text-base text-sm rounded-b-xl">
                  <h4 className="text-left w-full">{item?.desc}</h4>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
