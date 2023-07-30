import { CardContent, CardInfo, CardWrapper, Img, Link, Span } from './styles';

export const CardItem = ({ character }) => {

  return (
    <CardWrapper>
      <Img src={character.image} alt='Character' />
      <CardContent>
        <Link to={`/character/${character.id}`}>{character.name}</Link>
        <CardInfo>
          <Span status={character.status}>{character.species}</Span>
          <Span status={character.status}>{character.status}</Span>
        </CardInfo>
      </CardContent>
    </CardWrapper>
  );
};