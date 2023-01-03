import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({ character }) => {

  return (
    <div className="Card">
      <img src={character.image} alt='Character' />
      <div className='card-description'>
        <Link to={`/character/${character.id}`}>{character.name}</Link>
        <p>{character.species}</p>
        <p>{character.gender}</p>
        <p>{character.status}</p>
      </div>
    </div>
  );
};

export { Card };