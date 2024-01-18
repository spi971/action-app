const Button = ({ style, text, onClick }) => {
  return <button className={`btn ${style}`} onClick={onClick}>{text}</button>;
};

export default Button;
