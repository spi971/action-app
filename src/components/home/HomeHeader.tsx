import React from "react";
import HomeHeaderProps from "../interface/HomeHeaderProps";
import Modal from "./Modal";

const HomeHeader: React.FC<HomeHeaderProps> = ({modalProps}) => {
  return (
    <div className='flex items-center justify-center flex-col gap-2'>
      <article className=' flex flex-col items-center justify-center prose'>
        <h1 className='text-primary text-6xl my-6'>Actions!!</h1>
        <Modal
          id={modalProps.id}
          btnTitle={modalProps.btnTitle}
          modalTitle={modalProps.modalTitle}
          btnActions={modalProps.btnActions}
        />
      </article>
    </div>
  );
};
export  default HomeHeader;