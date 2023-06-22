import { CardDescription, CardWrapper, Img, Link } from './styles';

export const CardItem = ({ character }) => {

  return (
    <CardWrapper>
      <Img src={character.image} alt='Character' />
      <CardDescription>
        <Link to={`/character/${character.id}`}>{character.name}</Link>
        <p>{character.species}</p>
        <p>{character.gender}</p>
        <p>{character.status}</p>
      </CardDescription>
    </CardWrapper>
  );
};