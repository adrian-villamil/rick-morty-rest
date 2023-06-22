import HeaderIcon from '../../assets/header-icon.svg';
import { HeaderWrapper } from './styles';

const Header = () => {

  return (
    <HeaderWrapper>
      <img src={HeaderIcon} alt='header-icon' />
    </HeaderWrapper>
  );
};

export { Header };