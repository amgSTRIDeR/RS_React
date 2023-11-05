import { useNavigate } from 'react-router-dom';
import { ErrorPageProps } from '../../shared/interfaces';
import './ErrorPage.css';

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
      <p className="errorPage__text--reload" onClick={() => navigate('/')}>
        Click to reload the page
      </p>
    </div>
  );
};

export default ErrorPage;
