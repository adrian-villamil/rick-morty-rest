import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DivWrapper, Table } from "./styles";

const URL = 'https://rickandmortyapi.com/api/character/';

export const SingleCharacterPage = () => {
  const [character, setCharacter] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  const getCharacter = async () => {
    try {
      const response = await axios.get(URL.concat(id));
      setCharacter(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCharacter();
  }, []);

  const returnToHomePage = () => {
    navigate(-1);
  };

  return (
    <DivWrapper>
      <button onClick={returnToHomePage}>Go back</button>
      <h3>{character.name}</h3>
      <img src={character.image} alt='character' />
      <Table>
        <thead>
          <tr>
            <th colSpan={2}>Biography</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Status</td>
            <td>{character.status}</td>
          </tr>
          <tr>
            <td>Species</td>
            <td>{character.species}</td>
          </tr>
          <tr>
            <td>Type</td>
            <td>{character.type}</td>
          </tr>
          <tr>
            <td>Gender</td>
            <td>{character.gender}</td>
          </tr>
          <tr>
            <td>Origin</td>
            <td>{character.origin?.name}</td>
          </tr>
          <tr>
            <td>Location</td>
            <td>{character.location?.name}</td>
          </tr>
          <tr>
            <td>Created</td>
            <td>{character.created}</td>
          </tr>
        </tbody>
      </Table>
    </DivWrapper>
  );
};