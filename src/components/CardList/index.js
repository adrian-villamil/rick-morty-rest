import { CardListWrapper } from "./styles";

const CardList = (props) => {
  return (
    <CardListWrapper>
      {props.children}
    </CardListWrapper>
  );
};

export { CardList };