import { CardList } from '../../components/CardList';
import { CardItem } from "../../components/CardItem";
import { HomeWrapper } from "./styles";
import { useAxios } from "../../hooks/useAxios";
import { Pagination } from '../../components/Pagination';
import { useSearchParams } from 'react-router-dom';

export const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams({ page: '1' });
  const { loading, error, data } = useAxios(`character/?page=${searchParams.get('page')}`);

  if (loading) return <HomeWrapper><p>Is loading...</p></HomeWrapper>;

  if (error) return <HomeWrapper><p>There was an error:</p></HomeWrapper>;

  const onPageChange = (pageNumber) => {
    setSearchParams({ page: pageNumber });
  };

  return (
    <HomeWrapper>
      <CardList>
        {data?.results.map(character => (
          <CardItem
            key={character.id}
            character={character}
          />
        ))}
      </CardList>
      <Pagination pageCount={data?.info.pages} onPageChange={onPageChange} />
    </HomeWrapper>
  );
};