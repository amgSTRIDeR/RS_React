import CharactersService from '../../API/CharactersService';
import { PageControlProps } from '../../shared/interfaces';
import './PageControl.css';

const PageControl = ({ updateCharactersOnPage }: PageControlProps) => {
  const pagesNumbersArray = Array.from(
    { length: +CharactersService.pagesCount },
    (_, index) => {
      return (
        <button
          className="pageControl__button"
          key={index}
          onClick={() => updateCharactersOnPage(`${index + 1}`)}
        >
          {index + 1}
        </button>
      );
    }
  );

  return <div className="pageControl__container">{pagesNumbersArray}</div>;
};

export default PageControl;
