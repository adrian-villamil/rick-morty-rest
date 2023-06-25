import axios from "axios";
import { CardList } from '../../components/CardList';
import { useEffect, useState } from "react";
import { CardItem } from "../../components/CardItem";
import { Pagination } from "../../components/Pagination";
import { useSearchParams } from "react-router-dom";
import { CharactersDiv } from "./styles";
import { useAxios } from "../../hooks/useAxios";

const URL = 'https://rickandmortyapi.com/api/character/';

export const CharactersPage = () => {
  const [page, setPage] = useState(1);
  const {isLoading, error, data} = useAxios(`character/?page=${page}`);

  if (isLoading) return <CharactersDiv><p>Is loading...</p></CharactersDiv>;

  if (error) return <CharactersDiv><p>There was an error:</p></CharactersDiv>;

  const toNextPage = () => {
    setPage(page => page + 1);
  };

  const toPreviousPage = () => {
    setPage(page => page - 1);
  };

  return (
    <CharactersDiv>
      <Pagination
        previousPage={data?.info.prev}
        nextPage={data?.info.next}
        toPreviousPage={toPreviousPage}
        toNextPage={toNextPage}
      />
      <CardList>
        {data?.results.map(character => (
          <CardItem
            key={character.id}
            character={character}
          />
        ))}
      </CardList>
      <Pagination
        previousPage={data?.info.prev}
        nextPage={data?.info.next}
        toPreviousPage={toPreviousPage}
        toNextPage={toNextPage}
      />
    </CharactersDiv>
  );
};