import { CharacterProps } from '../../shared/interfaces';
import styles from './Character.module.css';
import { useContext } from 'react';
import { DetailsContext } from '../../contexts/DetailsContext';

const CharacterComponent = (props: CharacterProps) => {
  const { setDetailsParams } = useContext(DetailsContext);

  const addDetails = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();
    setDetailsParams(props.id);
  };

  return (
    <div className={styles.character} onClick={(event) => addDetails(event)}>
      <img
        className={styles.character__image}
        src={`https://rickandmortyapi.com/api/character/avatar/${
          props.id || 1
        }.jpeg`}
        alt={props.name}
      />
      <h2 className={styles.character__name}>{props.name}</h2>
    </div>
  );
};

export default CharacterComponent;
