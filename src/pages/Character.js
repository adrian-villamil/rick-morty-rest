import { useLocation } from "react-router-dom"
import '../css/Character.css'

const Character = () => {
  const location = useLocation()
  const state = location.state

  return (
    <div className="Character">
      <div className="row image">
        <img src={state.image} alt={state.name} />
      </div>
      <div className="row table">
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>{state.name}</td>
            </tr>
            <tr>
              <td>Status</td>
              <td>{state.status}</td>
            </tr>
            <tr>
              <td>Species</td>
              <td>{state.species}</td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>{state.gender}</td>
            </tr>
            <tr>
              <td>Origin</td>
              <td>{state.origin.name}</td>
            </tr>
            <tr>
              <td>Location</td>
              <td>{state.location.name}</td>
            </tr>
            <tr>
              <td>Created</td>
              <td>{state.created}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Character