import { ErrorButtonProps } from '../../shared/interfaces';
import './ErrorButton.css';

const ErrorButton = (props: ErrorButtonProps) => {
  return (
    <div className="errorButton__container">
      <img
        onClick={props.showTestError}
        className="errorButton__image"
        src="/20-minutes-adventure-before.gif"
        alt=""
      />
      <p className="errorButton__text">
        &#x2191; click to call an error &#x2191;
      </p>
    </div>
  );
};

export default ErrorButton;
