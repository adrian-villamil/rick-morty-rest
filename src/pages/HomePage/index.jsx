import { CardList } from '../../components/CardList';
import { useState } from "react";
import { CardItem } from "../../components/CardItem";
import { HomeWrapper } from "./styles";
import { useAxios } from "../../hooks/useAxios";
import { Paginate } from '../../components/Paginate';

export const HomePage = () => {
  const [page, setPage] = useState(1);
  const { loading, error, data } = useAxios(`character/?page=${page}`);

  if (loading) return <HomeWrapper><p>Is loading...</p></HomeWrapper>;

  if (error) return <HomeWrapper><p>There was an error:</p></HomeWrapper>;

  const onPageChange = (pageNumber) => {
    setPage(pageNumber);
  };

  return (
    <HomeWrapper>
      <Paginate pageCount={data?.info.pages} onPageChange={onPageChange} />
      <CardList>
        {data?.results.map(character => (
          <CardItem
            key={character.id}
            character={character}
          />
        ))}
      </CardList>
      {/* <Paginate pageCount={data?.info.pages} onPageChange={onPageChange} /> */}
    </HomeWrapper>
  );
};