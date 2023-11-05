import { useSearchParams } from 'react-router-dom';
import './Aside.css';

const Aside = () => {
  const [, setSearchParams] = useSearchParams();

  const handleClick = () => {
    setSearchParams((prevSearchParams) => {
      prevSearchParams.set('aside', `0`);
      return prevSearchParams;
    });
  };

  return (
    <aside className="aside" onClick={handleClick}>
      Close me
    </aside>
  );
};

export default Aside;
