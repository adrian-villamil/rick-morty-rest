import { Form, Input, SearchIcon, SearchWrapper } from './styles';

export const Searcher = ({ nameQuery, setSearchParams }) => {
  const handleChange = (event) => {
    let search;
    if (event.target.value) {
      search = { name: event.target.value };
    } else {
      search = undefined;
    }
    setSearchParams(search, { replace: true });
  };
  return (
    <SearchWrapper>
      <Form>
        <Input type="text" value={nameQuery} onChange={handleChange} placeholder='Search...' />
        <SearchIcon />
      </Form>
    </SearchWrapper>
  );
};