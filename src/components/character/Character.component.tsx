import { CharacterProps } from '../../shared/interfaces';
import styles from './Character.module.css';
import Image from '../image/Image.component';
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
      <Image
        className={styles.character__image}
        src={`https://rickandmortyapi.com/api/character/avatar/${props.id}.jpeg`}
        alt={props.name}
      />
      <h2 className={styles.character__name}>{props.name}</h2>
    </div>
  );
};

export default CharacterComponent;
