import { NavLink } from 'react-router-dom';
import RickAndMortyLogo from '../../assets/rick-and-morty-title.png';
import { HeaderWrapper, NavIcon } from './styles';

const Header = () => {

  return (
    <HeaderWrapper>
      <NavLink to='/'>
        <NavIcon src={RickAndMortyLogo} alt='header-icon' />
      </NavLink>
    </HeaderWrapper>
  );
};

export { Header };