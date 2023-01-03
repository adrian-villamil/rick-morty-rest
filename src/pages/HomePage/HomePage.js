import axios from "axios";
import { CardList } from '../../components/CardList/CardList';
import { useEffect, useState } from "react";
import { Header } from "../../components/Header/Header";
import { Card } from "../../components/Card/Card";
import { Pagination } from "../../components/Pagination/Pagination";

const URL = 'https://rickandmortyapi.com/api/character/?page=1';

const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(URL);
  const [nextPage, setNextPage] = useState('');
  const [previousPage, setPreviousPage] = useState('');
  const [characters, setCharacters] = useState([]);

  const toNextPage = () => {
    setCurrentPage(nextPage);
  }

  const toPreviousPage = () => {
    setCurrentPage(previousPage);
  }

  useEffect(() => {
    axios.get(currentPage)
      .then((response) => {
        setNextPage(response.data.info.next);
        setPreviousPage(response.data.info.prev);
        setCharacters(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [currentPage]);

  return (
    <div className="Home">
      <Header />
      <Pagination
        previousPage={previousPage}
        nextPage={nextPage}
        toPreviousPage={toPreviousPage}
        toNextPage={toNextPage}
      />
      <CardList>
        {!!characters && characters.map(character => (
          <Card
            key={!!character && character.id}
            character={character}
          />
        ))}
      </CardList>
      <Pagination
        previousPage={previousPage}
        nextPage={nextPage}
        toPreviousPage={toPreviousPage}
        toNextPage={toNextPage}
      />
    </div>
  );
};

export { HomePage };