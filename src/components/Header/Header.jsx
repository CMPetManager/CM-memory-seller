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
            <span className='header__buttons_login btn'>
              <Link to={'/login'}>Login</Link>
            </span>
            <span className='header__buttons_registration btn'>
              <Link to={'/registration'}>Registration</Link>
            </span>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
