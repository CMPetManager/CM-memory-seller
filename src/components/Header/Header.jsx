import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <>
      <header className='logo-buttons'>
        <div className='header__wrapper'>
          <div className='header__wrapper__logo'>
            <a href='/'>Catch the moment</a>
          </div>
          <div className='header__wrapper__nuttons'>
            <div className='header__wrapper__buttons__login'>
              <Link to={'/login'}>Login</Link>
            </div>
            <div className='header__wrapper__buttons__registration'>
              <Link to={'/registration'}>Registration</Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
