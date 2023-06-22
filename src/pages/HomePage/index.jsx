import CharactersImage from '../../assets/rick-and-morty-characters.png';
import LocationsImage from '../../assets/rick-and-morty-locations.jpg';
import EpisodesImage from '../../assets/rick-and-morty-episodes.jpg';
import { DivContainer, DivItem, Image } from './styles';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <DivContainer>
        <DivItem>
          <Link to='/character'>
            <Image src={CharactersImage} alt="characters-image" />
          </Link>
          <h1>Characters</h1>
          <p>Description</p>
        </DivItem>
        <DivItem>
          <Link to='/location'>
            <Image src={LocationsImage} alt="locations-image" />
          </Link>
          <h1>Locations</h1>
          <p>Description</p>
        </DivItem>
        <DivItem>
          <Link to='/episode'>
            <Image src={EpisodesImage} alt="episodes-image" />
          </Link>
          <h1>Episodes</h1>
          <p>Description</p>
        </DivItem>
      </DivContainer>
    </>
  );
};

export { HomePage };