interface BtnProps {
  style: string;
  text: string;
  size: string;
  onClick?: () => void;
}

const Button: React.FC<BtnProps> = ({ style, text, size, onClick }) => {
  return (
    <button type="button" className={`btn ${style} ${size}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
