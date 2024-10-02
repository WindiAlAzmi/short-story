import SummaryCart from "../components/Cart/SummaryCart";
import TableCart from "../components/Cart/TableCart";
import PaymentMethod from "../components/Cart/PaymentMethod";

export default function Cart() {

  return (
    <div className="w-full mx-auto md:my-10 mt-24 md:mt-20 md:text-[22px] text-[14px] px-2 md:px-0 gap-14 font-medium capitalize flex flex-col md:gap-10 md:justify-between justify-center max-w-7xl">
      <h3>Review Pembayaran</h3>
      <div className="flex md:flex-row flex-col md:gap-5 gap-4 justify-center">
        <div className="flex flex-col md:w-[65%] w-full  md:gap-20 gap-6">
          <TableCart />
        </div>
        <div className="flex flex-col md:w-[30%] bg-blue">
          <PaymentMethod />
          <SummaryCart />
        </div>
      </div>
    </div>
  );
}