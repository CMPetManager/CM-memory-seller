import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <>
      <header className='header'>
        <div className='header__wrapper'>
          <div className='header__logo'>
            <a href='/'>Catch the moment</a>
          </div>
          <div className='header__buttons'>
            <Link to={'/login'} className='header__buttons_login btn'>
              Login
            </Link>
            <Link
              to={'/registration'}
              className='header__buttons_registration btn'
            >
              Registration
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
