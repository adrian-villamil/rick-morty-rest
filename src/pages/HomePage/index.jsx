import { CardList } from '../../components/CardList';
import { CardItem } from "../../components/CardItem";
import { HomeWrapper } from "./styles";
import { useAxios } from "../../hooks/useAxios";
import { Pagination } from '../../components/Pagination';
import { useSearchParams } from 'react-router-dom';

export const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams({ page: '1' });
  const currentPage = searchParams.get('page');
  const { loading, error, data } = useAxios(`character/?page=${currentPage}`);

  if (loading) return <HomeWrapper><p>Is loading...</p></HomeWrapper>;

  if (error) return <HomeWrapper><p>{error.response.status}: {error.response.data.error}</p></HomeWrapper>;

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
      <Pagination
        pageCount={data?.info.pages}
        onPageChange={onPageChange}
        currentPage={currentPage}
      />
    </HomeWrapper>
  );
};