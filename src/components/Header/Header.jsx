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
            <div className='header__login'>
              <Link to={'/login'}>Login</Link>
            </div>
            <div className='header__registration'>
              <Link to={'/registration'}>Registration</Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
