export default interface DialogProps {
    id: string;
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