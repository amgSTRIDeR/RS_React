import Button from '../../UI/button/Button.component';
import { ErrorButtonProps } from '../../shared/interfaces';
import './ErrorButton.css';

const ErrorButton = (props: ErrorButtonProps) => {
  return (
    <div className="errorButton__container">
      <Button onClick={props.showTestError}> Test Error </Button>
    </div>
  );
};

export default ErrorButton;
