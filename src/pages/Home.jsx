import { useEffect } from "react";
import ContactUs from "../components/Home/ContactUs";
import Questions from "../components/Home/Questions";
import ReachDream from "../components/Home/ReachDream";
import Testimonials from "../components/Home/Testimonials";
import VideoHome from "../components/Home/VideoHome";


export default function Home() {

  useEffect(() => {
    window.scroll(0, 0);
  }, []);


  return (
    <>
      {/* Video */}
      <VideoHome />
      {/* Reach dream */}
      <ReachDream />
      {/* Testimonial */}
      <Testimonials />
      {/* What is */}
      <div className="mx-auto md:my-10 mt-14 md:mt-40 md:text-[22px] text-[14px] px-2 md:px-0 gap-6 font-medium capitalize flex flex-col max-w-7xl">
        <h4>Apa itu Beauty Preneur?</h4>
        <h5 className="mx-auto font-normal md:text-[15px] text-[12px] text-[#21272A] lowercase  md:w-[65%] w-[90%] leading-5">
          Kami merupakan platform yang menawarkan berbagai kursus makeup dari
          para ahli berpengalaman, mulai dari level pemula hingga makeup artist
          profesional. Lebih dari sekadar belajar makeup, kami hadir untuk
          membuka peluang karier baru bagi perempuan Indonesia. Raih
          keterampilan makeup yang bisa menjadi langkah awal dalam membangun
          karier sukses di industri kecantikan
        </h5>
      </div>
      {/* Questions */}
      <Questions />
      {/* Forms */}
      <ContactUs />
    </>
  );
}
