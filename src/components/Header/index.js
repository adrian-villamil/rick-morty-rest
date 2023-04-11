import './Header.css';
import HeaderIcon from '../../assets/header-icon.svg';

const Header = () => {

  return (
    <div className="Header">
      <img src={HeaderIcon} alt='header-icon' />
    </div>
  );
};

export { Header };