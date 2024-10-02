 import { Modal } from "antd";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleCancel } from "../features/modalSlice";

export default function ModalComponent() {
  const modalData = useSelector((state) => state.modal)
  const [isData, setIsData] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsData(modalData?.isModalOpen);
  }, [modalData]);

  return (
    <Modal
      title=""
      open={isData}
      onCancel={() => dispatch(handleCancel())}
      maskClosable={true} 
      footer={null} // Menyembunyikan tombol OK dan Close
      className="flex flex-row mx-auto px-4 py-20 md:px-0 md:py-0 items-center justify-center"
    >
      <img
        src="/assets/icons/unauth.png"
        alt="logo"
        className="w-5/6 md:h-[360px] h-[260px] mx-auto cursor-pointer"
      />
      <p className="w-5/6 mx-auto md:text-sm text-xs text-center">
        Waduh! Maaf kamu tidak bisa daftar! kamu harus login dulu untuk daftar
        kursus ini
      </p>
    </Modal>
  );
}

ModalComponent.propTypes = {
  isModalOpen: PropTypes.func,
  isModalCancel: PropTypes.func,
  handleOk: PropTypes.func,
};
