import { useSearchParams } from 'react-router-dom';
import CharactersService from '../../API/CharactersService';
import { PageControlProps } from '../../shared/interfaces';
import './PageControl.css';

const PageControl = ({ updateCharactersOnPage }: PageControlProps) => {
  const [, setSearchParams] = useSearchParams();

  const handleClick = (pageNumber: string) => {
    setSearchParams((prevSearchParams) => {
      prevSearchParams.set('page', `${CharactersService.currentPage}`);
      prevSearchParams.set(
        'characters-per-page',
        `${CharactersService.charactersPerPage}`
      );
      return prevSearchParams;
    });
    updateCharactersOnPage(pageNumber);
  };
  const pagesNumbersArray = Array.from(
    { length: +CharactersService.pagesCount },
    (_, index) => {
      const isActive = +CharactersService.currentPage === index + 1;

      return (
        <p
          className={`pageControl__button ${
            isActive ? 'pageControl__button_active' : ''
          }`}
          key={index}
          onClick={() => handleClick(`${index + 1}`)}
        >
          {index + 1}
        </p>
      );
    }
  );

  return <nav className="pageControl__container">{pagesNumbersArray}</nav>;
};

export default PageControl;
