export default interface BtnProps {
  type: "button" | "submit" | "reset" | undefined;
  style: string;
  text: string;
  size: string;
  onClick?: () => void;
}
