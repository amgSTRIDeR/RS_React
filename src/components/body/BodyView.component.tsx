import CharactersService from '../../API/CharactersService';
import { BodyProps } from '../../shared/interfaces';
import Header from '../header/Header.component';
import Main from '../main/Main.component';
import PageControl from '../pageControl/PageControl.component';

const BodyView = ({
  updateCharacters,
  characters,
  updateCharactersOnPage,
}: BodyProps) => {
  return (
    <>
      <Header
        onSearch={updateCharacters}
        updateCharactersOnPage={updateCharactersOnPage}
      />
      {CharactersService.pagesCount !== '0' ? (
        <PageControl updateCharactersOnPage={updateCharactersOnPage} />
      ) : null}
      <Main characters={characters} />
    </>
  );
};

export default BodyView;
