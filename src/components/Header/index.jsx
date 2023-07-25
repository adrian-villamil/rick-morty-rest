import RickIcon from '../../assets/icons8-rick-sanchez.svg';
import MortyIcon from '../../assets/icons8-morty-smith.svg';
import { HeaderWrapper, NavIcon, NavLink } from './styles';

const Header = () => {

  return (
    <HeaderWrapper>
      <NavLink to='/'>
        Home
      </NavLink>
      <NavLink to='/character'>
        Characters
      </NavLink>
      <NavLink to='/location'>
        Locations
      </NavLink>
      <NavLink to='/episode'>
        Episodes
      </NavLink>
    </HeaderWrapper>
  );
};

export { Header };