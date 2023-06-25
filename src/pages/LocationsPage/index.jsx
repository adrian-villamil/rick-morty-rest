import { useState } from "react";
import { useAxios } from "../../hooks/useAxios";
import { LocationsDiv } from "./styles";
import { Pagination } from "../../components/Pagination";

export const LocationsPage = () => {
  const [page, setPage] = useState(1);
  const { isLoading, error, data } = useAxios(`location?page=${page}`);

  if (isLoading) return <p>Is loading...</p>

  if (error) return <p>There was an error</p>

  const toNextPage = () => {
    setPage(page => page + 1);
  };

  const toPreviousPage = () => {
    setPage(page => page - 1);
  };

  return (
    <LocationsDiv>
      <h1>Locations Page</h1>
      <Pagination
        nextPage={data?.info.next}
        previousPage={data?.info.prev}
        toNextPage={toNextPage}
        toPreviousPage={toPreviousPage}
      />
      <ul>
        {data?.results.map((location) => (
          <li key={location.id}>{location.name}</li>
        ))}
      </ul>
      <Pagination
        nextPage={data?.info.next}
        previousPage={data?.info.prev}
        toNextPage={toNextPage}
        toPreviousPage={toPreviousPage}
      />
    </LocationsDiv>
  );
};