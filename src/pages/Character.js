import { useLocation } from "react-router-dom"
import '../css/Character.css'

const Character = () => {
  const location = useLocation()
  const state = location.state

  return (
    <div className="Character">
      <img src={state.image} alt={state.name} />
      <p>Name: {state.name}</p>
      <p>Status: {state.status}</p>
      <p>Species: {state.species}</p>
      <p>Gender: {state.gender}</p>
      <p>Origin: {state.origin.name}</p>
      <p>Location: {state.location.name}</p>
      <p>Created: {state.created}</p>
    </div>
  )
}

export default Character