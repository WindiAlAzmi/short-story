/* eslint-disable react-hooks/exhaustive-deps */
// import { Alert } from "antd";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { isShowingAlerts } from "../features/alertSlice";

export default function useShowingAlert(data) {

  const dispatch = useDispatch();
  const [isAlertThere, setIsAlertThere] = useState(false);

  useEffect(() => {
    if (data?.status === true)  setIsAlertThere(true);
      const timer = setTimeout(() => {
        dispatch(
          isShowingAlerts({
            status: false,
          })
        );

        setIsAlertThere(false);
      }, 4000);

      return () => clearTimeout(timer);

  }, [data]);

  return { data, isAlertThere };
}
