import Button from "./Button";

interface ModalProps {
  btnTitle: string;
  modalTitle: string;
  btnActions: { left: string; right: string };
}

const Modal: React.FC<ModalProps> = ({ btnTitle, modalTitle, btnActions }) => {
  const openModal = () => document?.getElementById("my_modal_1")?.showModal();
  const hello = () => {console.log("hello")};

  return (
    <div>
      <Button
        style='btn-primary'
        size='btn-md'
        text={btnTitle}
        onClick={openModal}
      />
      <dialog id='my_modal_1' className='modal'>
        <div className='modal-box flex flex-col items-center justify-center'>
          <h3 className='font-bold text-lg'>{modalTitle}</h3>
          <div className='modal-action'>
            <form method='dialog'>
              <div className='flex gap-6'>
                {/* if there is a button in form, it will close the modal */}
                <Button
                  style='btn-warning'
                  size='btn-sm'
                  text={btnActions.left}
                />
              </div>
            </form>
            <Button
              style='btn-primary'
              size='btn-sm'
              text={btnActions.right}
              onClick={hello}
            />
          </div>
        </div>
      </dialog>
    </div>
  );
};
export default Modal;
