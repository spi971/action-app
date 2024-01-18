import Button from "./Button";
import Dialog from "./Dialog";
import ModalProps from "../interface/ModalProps";

const Modal: React.FC<ModalProps> = ({
  id,
  btnTitle,
  modalTitle,
  btnActions,
}) => {
  const openModal = () => document.getElementById(id).showModal();

  return (
    <div>
      <Button
        type='button'
        style='btn-primary'
        size='btn-md'
        text={btnTitle}
        onClick={openModal}
      />
      <Dialog id={id} modalTitle={modalTitle} btnActions={btnActions} />
    </div>
  );
};

export default Modal;
