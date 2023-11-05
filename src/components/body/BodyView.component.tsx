import { BodyProps } from '../../shared/interfaces';
import Header from '../header/Header.component';
import Main from '../main/Main.component';

const BodyView = ({ updateCharacters, characters }: BodyProps) => {
  return (
    <>
      <Header onSearch={updateCharacters} />
      <Main characters={characters} />
    </>
  );
};

export default BodyView;
