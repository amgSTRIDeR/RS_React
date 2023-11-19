import { useNavigate } from 'react-router-dom';
import { ErrorPageProps } from '../../shared/interfaces';
import './ErrorPage.css';
import Button from '../../UI/button/Button.component';

const ErrorPage = (props: ErrorPageProps) => {
  const navigate = useNavigate();

  return (
    <div className="errorPage">
      <h1 className="errorPage__title">
        I am not in control of that situation at all!
      </h1>
      <p className="errorPage__text">{props.header}</p>
      <img
        className="errorPage__image"
        src="/20-minutes-adventure-after.gif"
        alt=""
      />
      <Button onClick={() => navigate('/')}>Return to main</Button>
    </div>
  );
};

export default ErrorPage;
