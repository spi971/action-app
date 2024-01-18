import BtnProps from "../interface/BtnProps";

const Button: React.FC<BtnProps> = ({ type, style, text, size, onClick }) => {
  return (
    <button type={type} className={`btn ${style} ${size}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
