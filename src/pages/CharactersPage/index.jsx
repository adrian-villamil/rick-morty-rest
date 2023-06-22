import axios from "axios";
import { CardList } from '../../components/CardList';
import { useEffect, useState } from "react";
import { CardItem } from "../../components/CardItem";
import { Pagination } from "../../components/Pagination";
import { useSearchParams } from "react-router-dom";

const URL = 'https://rickandmortyapi.com/api/character/';

export const CharactersPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryPage = searchParams.get('page') ?? '1';
  const [page, setPage] = useState(Number(queryPage));
  const currentPage = `${URL}?page=${page}`;
  const [nextPage, setNextPage] = useState('');
  const [previousPage, setPreviousPage] = useState('');
  const [characters, setCharacters] = useState([]);

  const toNextPage = () => {
    setPage(p => p + 1);
  };

  const toPreviousPage = () => {
    setPage(p => p - 1);
  };

  useEffect(() => {
    axios.get(currentPage)
      .then((response) => {
        setNextPage(response.data.info.next);
        setPreviousPage(response.data.info.prev);
        setCharacters(response.data.results);
        setSearchParams({ page: page });
      })
      .catch((error) => {
        console.log(error);
      })
  }, [page]);

  return (
    <div className="Home">
      <Pagination
        previousPage={previousPage}
        nextPage={nextPage}
        toPreviousPage={toPreviousPage}
        toNextPage={toNextPage}
      />
      <CardList>
        {!!characters && characters.map(character => (
          <CardItem
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