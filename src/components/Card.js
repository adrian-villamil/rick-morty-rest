import '../css/Card.css'
import { Link } from "react-router-dom"

const Card = ({character}) => {
  
  return (
    <div className="Card">
      <img src={character.image} alt='' />
      <div className='card-description'>
        <Link to="/character" className='link' state={{...character}}>{character.name}</Link>
        <p>{character.species}</p>
        <p>{character.gender}</p>
        <p>{character.status}</p>
      </div>
    </div>
  )
}

export default Card