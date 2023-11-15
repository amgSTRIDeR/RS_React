import { PageControlProps } from '../../shared/interfaces';
import './PageControl.css';

const PageControl = ({
  pagesCount,
  currentPage,
  setCurrentPage,
}: PageControlProps) => {
  const handleClick = (pageNumber: string) => {
    setCurrentPage(+pageNumber);
  };

  const pagesNumbersArray = Array.from({ length: pagesCount }, (_, index) => {
    const isActive = currentPage === index + 1;
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
  });

  return <nav className="pageControl__container">{pagesNumbersArray}</nav>;
};

export default PageControl;
