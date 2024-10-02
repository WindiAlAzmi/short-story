import { useEffect} from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

//table
 const data = [
   { header: "SUBTOTAL :", value: "Rp 50.000" },
   { header: "Discount :", value: "30%" },
   { header: "Biaya Platform :", value: "5%" },
 ];


export default function SummaryCart() {
  const dataDetail = useSelector((state) => state.course);
  
  console.log(data, 'ini data');

  useEffect(() => {
     
  }, [dataDetail]);

  return (
    <div className="w-full text-left flex flex-col justify-center md:justify-start gap-4 md:px-0 px-2">
      {/* Daftar Checkout */}
      <div className="flex flex-col mt-4 gap-8 md:w-[90%] w-full mx-auto md:mx-0 py-4 px-2 rounded-md border border-gray-500 shadow-xl">
        {/* Summary */}
        <div className="flex flex-col justify-between gap-2 w-full">
          <h4 className="md:text-left text-center ">Summary</h4>
          <hr className="border border-black " />
          <div className="w-full text-[13px] ">
            <div className="container mx-auto">
              <table className="min-w-full border-collapse">
                <tbody>
                  {data.map((item, index) => (
                    <tr key={index} className="">
                      {/* Kolom pertama sebagai header */}
                      <td className="font-semibold text-left p-2  bg-white">
                        {item.header}
                      </td>
                      {/* Kolom kedua sebagai data */}
                      <td className="text-right p-2">{item.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <hr className="border border-black " />
          <div className="container text-[13px]   mx-auto">
            <table className="min-w-full border-collapse">
              <tbody>
                <tr className="">
                  {/* Kolom pertama sebagai header */}
                  <td className="font-semibold text-left p-2  bg-white">
                    ESTIMATED TOTAL :
                  </td>
                  {/* Kolom kedua sebagai data */}
                  <td className="text-right p-2">Rp 10.000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* Button Daftar  */}
        <Link
          to="/success-payment"
          className="rounded-[10px] h-10 px-6 py-2  text-center text-base text-white  bg-black"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
}
