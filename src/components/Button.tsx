const Button = ({ style, text, size, onClick }) => {
  return <button className={`btn ${style} ${size}`} onClick={onClick}>{text}</button>;
};

export default Button;
