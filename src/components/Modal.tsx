import Button from "./Button";

const Modal = () => {
  const openModal = () => document.getElementById("my_modal_1").showModal();
  const hello = (event: any) => console.log("hello", event);
  return (
    <div>
      <Button style='btn-primary' text='Add Board' onClick={openModal} />
      <dialog id='my_modal_1' className='modal'>
        <div className='modal-box flex flex-col items-center justify-center'>
          <h3 className='font-bold text-lg'>Create new Board</h3>
          <div className='modal-action'>
            <form method='dialog'>
              <div className='flex gap-6'>
                {/* if there is a button in form, it will close the modal */}
                <Button style='btn-warning' text='Cancel' />
              </div>
            </form>
            <Button style='btn-primary' text='Create' onClick={hello} />
          </div>
        </div>
      </dialog>
    </div>
  );
};
export default Modal;
