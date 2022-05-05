import { useState } from "react";

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const customStyles = {
    content: {
      backgroundColor: "#121212",
      border: "none",
    },
    overlay: {
      zIndex: 9999,
      background: "#ffffff80",
    },
  };
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return { openModal, closeModal, isOpen, customStyles };
};

export default useModal;
