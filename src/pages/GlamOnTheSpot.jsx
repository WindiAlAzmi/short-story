import { useEffect } from "react";
import ChooseRightNow from "../components/GlamOnTheSpot/ChooseRightNow";
import FlowGlam from "../components/GlamOnTheSpot/FlowGlam";
import VideoDemo from "../components/GlamOnTheSpot/VideoDemo";
import WhyThis from "../components/GlamOnTheSpot/WhyThis";

export default function GlamOnTheSpot() {

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <VideoDemo />
      {/* What is */}
      <div className="mx-auto md:my-4 mt-14 md:mt-20 md:text-[22px] text-[14px] px-2 md:px-0 gap-6 font-medium capitalize flex flex-col max-w-7xl">
        <h4>Apa itu Glam On The Spot ?</h4>
        <h5 className="mx-auto font-normal md:text-[15px] text-[12px] text-[#21272A] lowercase  md:w-[65%] w-[90%] leading-5">
          program pelatihan makeup yang dirancang untuk memberikan pengalaman
          belajar yang mendalam bagi peserta. Dalam sesi ini, peserta akan
          menyaksikan langsung proses makeup yang dilakukan oleh mentor pada
          klien.
        </h5>
        <h5 className="mx-auto font-normal md:text-[15px] text-[12px] text-[#21272A] lowercase  md:w-[65%] w-[90%] leading-5">
          Pengalaman ini memungkinkan mereka untuk memahami teknik-teknik makeup
          secara langsung dan melihat tantangan nyata di lapangan. Setelah sesi
          observasi, peserta akan mendapatkan kesempatan untuk menerapkan ilmu
          yang diperoleh melalui sesi praktik.
        </h5>
      </div>
      <WhyThis/>
      <FlowGlam />
      <ChooseRightNow/>
    </>
  );
}
