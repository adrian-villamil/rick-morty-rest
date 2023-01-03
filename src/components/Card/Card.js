import './Card.css';

const Card = ({ character }) => {

  return (
    <div className="Card">
      <img src={character.image} alt='Character' />
      <div className='card-description'>
        <h3>{character.name}</h3>
        <p>{character.species}</p>
        <p>{character.gender}</p>
        <p>{character.status}</p>
      </div>
    </div>
  );
};

export { Card };