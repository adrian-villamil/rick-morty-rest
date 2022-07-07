import '../css/Card.css'

const Card = ({character}) => {
  
  return (
    <div className="Card">
      <img src={character.image} alt='' />
      <div className='card-description'>
        <h2>{character.name}</h2>
        <p>{character.species}</p>
        <p>{character.gender}</p>
        <p>{character.status}</p>
      </div>
    </div>
  )
}

export default Card