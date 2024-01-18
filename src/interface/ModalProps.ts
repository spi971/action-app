export default interface ModalProps {
  id: string;
  btnTitle: string;
  modalTitle: string;
  btnActions: {
    left: {
      text: string;
    };
    right: {
      text: string;
      onClick: () => void;
    };
  };
}
