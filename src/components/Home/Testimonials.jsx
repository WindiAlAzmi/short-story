import { Carousel } from "antd";
import { TestimonialData } from "../../datas/DataInfoHome";
import styled from "styled-components";

const StyledCarousel = styled(Carousel)`
  .slick-dots li button {
    background-color: #cccccc;
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }

  .slick-dots li.slick-active button {
    background-color: #000000;
  }

  .slick-dots li {
    margin: 0 5px;
  }
`;

export default function Testimonials() {
  const dataTestimonial = TestimonialData();
  return (
    <div className="max-w-6xl flex flex-col mx-auto md:my-10 mt-14 md:mt-40 md:text-[22px] text-[14px] px-2 md:px-4 gap-6  font-medium capitalize">
      <h4>Testimonials</h4>
      <StyledCarousel
        slidesToShow={2}
        responsive={[
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            },
          },
        ]}
        autoplay
        className="flex flex-row  mx-auto my-4 gap-10"
      >
        {dataTestimonial?.map((item, index) => (
          <div
            key={index}
            className="h-fit p-5 bg-white  rounded-md flex flex-col items-center justify-center "
          >
            <h3 className="md:w-[60%] w-full mx-auto  text-center">
              {`"`} {item.testimoni}
              {`"`}
            </h3>
            <img
              src={`/public/assets/image/${item.photo}`}
              alt="img-testi"
              className="w-[48px] h-auto mx-auto mt-6 mb-3"
            />
            <h3>{item.name}</h3>
            <h3>{item.position}</h3>
          </div>
        ))}
      </StyledCarousel>
    </div>
  );
}
