import '../css/Cards.css'
import Card from "./Card"

const Cards = ({characters}) => {

  return (
    <div className="Cards">
        {characters && characters.map(character => <Card key={character.id} character={character} />)}
    </div>
  )
}

export default Cards