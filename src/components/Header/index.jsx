import { HeaderWrapper, NavLink } from './styles';

const Header = () => {

  return (
    <HeaderWrapper>
      <NavLink to='/'>
        Home
      </NavLink>
    </HeaderWrapper>
  );
};

export { Header };