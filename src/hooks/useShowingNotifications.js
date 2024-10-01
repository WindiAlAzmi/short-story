/* eslint-disable react-hooks/exhaustive-deps */
import { notification } from "antd";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { isShowingNotification } from "../features/notificationSlice";

export default function useShowingNotifications(data) {
  const dispatch = useDispatch();
  const [api, contextHolder] = notification.useNotification();

  const showNotification = () => {
    api.open({
      message: data.dataNotifications.title,
      description: data.dataNotifications.message,
      showProgress: true,
      duration: 5,
    });
  };

  useEffect(() => {
    if (data.dataNotifications.status === true) showNotification();
    const timer = setTimeout(() => {
      dispatch(isShowingNotification({ status: false }));
    }, 1000);

    return () => clearTimeout(timer);
  }, [data]);

  return { contextHolder };
}
