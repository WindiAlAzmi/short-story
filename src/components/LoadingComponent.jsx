/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../features/generalSlice";

export default function LoadingComponent() {
    const loadData = useSelector((state) => state.general);
    const dispatch = useDispatch();

   useEffect(() => {
     setTimeout(() => {
       dispatch(setLoading(false))
     }, 3000);
  }, [loadData])

 return (
   loadData?.loading && (
     <div className="absolute z-[999] pt-[320px] bg-black/20 w-full flex flex-row md:items-center items-start justify-center mx-auto inset-0">
       <img
         src="/assets/icons/loading-blush.png"
         alt="logo"
         className="animate-bounce  md:w-[180px] md:h-[190px] w-[100px] h-[100px]  cursor-pointer"
       />
     </div>
   )
 );
}
