import { ReactNode } from "react";
import Modal from "react-modal";
import useModal from "./useModal";
import "./Modal.css";

type GifModalProps = {
  children: ReactNode;
  isOpen: boolean;
  onClose: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const GifModal = ({ children, isOpen, onClose }: GifModalProps) => {
  const { customStyles } = useModal();

  return (
    <Modal
      ariaHideApp={false}
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <button className="modal-close" onClick={onClose}>
        X
      </button>
      {children}
    </Modal>
  );
};

export default GifModal;
