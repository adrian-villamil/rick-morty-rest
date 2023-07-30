import { CardList } from '../../components/CardList';
import { useState } from "react";
import { CardItem } from "../../components/CardItem";
import { Pagination } from "../../components/Pagination";
import { HomeWrapper } from "./styles";
import { useAxios } from "../../hooks/useAxios";

const URL = 'https://rickandmortyapi.com/api/character/';

export const HomePage = () => {
  const [page, setPage] = useState(1);
  const {isLoading, error, data} = useAxios(`character/?page=${page}`);

  if (isLoading) return <HomeWrapper><p>Is loading...</p></HomeWrapper>;

  if (error) return <HomeWrapper><p>There was an error:</p></HomeWrapper>;

  const toNextPage = () => {
    setPage(page => page + 1);
  };

  const toPreviousPage = () => {
    setPage(page => page - 1);
  };

  return (
    <HomeWrapper>
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
    </HomeWrapper>
  );
};