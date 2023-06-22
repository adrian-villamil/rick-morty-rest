import CharactersImage from '../../assets/rick-and-morty-characters.png';
import LocationsImage from '../../assets/rick-and-morty-locations.jpg';
import EpisodesImage from '../../assets/rick-and-morty-episodes.jpg';
import { DivContainer, DivItem, Image } from './styles';

const HomePage = () => {
  return (
    <>
      <DivContainer>
        <DivItem>
          <h1>Characters</h1>
          <Image src={CharactersImage} alt="characters-image" />
          <p>Description</p>
        </DivItem>
        <DivItem>
          <h1>Locations</h1>
          <Image src={LocationsImage} alt="locations-image" />
          <p>Description</p>
        </DivItem>
        <DivItem>
          <h1>Episodes</h1>
          <Image src={EpisodesImage} alt="episodes-image" />
          <p>Description</p>
        </DivItem>
      </DivContainer>
    </>
  );
};

export { HomePage };