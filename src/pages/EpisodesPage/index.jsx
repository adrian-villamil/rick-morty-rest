import { useState } from "react";
import { useAxios } from "../../hooks/useAxios";
import { EpisodesDiv } from "./styles";
import { Pagination } from "../../components/Pagination";

export const EpisodesPage = () => {
  const [page, setPage] = useState(1);
  const { isLoading, error, data } = useAxios(`episode?page=${page}`);

  if (isLoading) return <EpisodesDiv><p>Is Loading...</p></EpisodesDiv>;

  if (error) return <EpisodesDiv><p>There is an error.</p></EpisodesDiv>;

  const toNextPage = () => {
    setPage(page => page + 1);
  };

  const toPreviousPage = () => {
    setPage(page => page - 1);
  };

  return (
    <EpisodesDiv>
      <h1>Episodes Page</h1>
      <Pagination
        nextPage={data?.info.next}
        previousPage={data?.info.prev}
        toNextPage={toNextPage}
        toPreviousPage={toPreviousPage}
      />
      <ul>
        {data?.results.map((episode) => (
          <li key={episode.id}>{episode.name}</li>
        ))}
      </ul>
      <Pagination
        nextPage={data?.info.next}
        previousPage={data?.info.prev}
        toNextPage={toNextPage}
        toPreviousPage={toPreviousPage}
      />
    </EpisodesDiv>
  );
};