import DialogProps from "../interface/DialogProps";
import Button from "./Button";

const Dialog: React.FC<DialogProps> = ({ id, modalTitle, btnActions }) => {
  return (
    <dialog id={id} className='modal'>
      <div className='modal-box flex flex-col items-center justify-center'>
        <h3 className='font-bold text-lg'>{modalTitle}</h3>
        <div className='modal-action'>
          <form method='dialog'>
            <div className='flex gap-6'>
              {/* if there is a button in form, it will close the modal */}
              <Button
                type='submit'
                style='btn-warning'
                size='btn-sm'
                text={btnActions.left.text}
              />
            </div>
          </form>
          <Button
            type='button'
            style='btn-primary'
            size='btn-sm'
            text={btnActions.right.text}
            onClick={btnActions.right.onClick}
          />
        </div>
      </div>
    </dialog>
  );
};

export default Dialog;
