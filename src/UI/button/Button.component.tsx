import { ButtonProps } from '../../shared/interfaces';
import './Button.css';

const Button = (props: ButtonProps) => {
  return (
    <button
      className={`button ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
