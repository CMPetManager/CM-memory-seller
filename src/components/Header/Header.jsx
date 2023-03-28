import './Header.css';

function Header() {
  // function login() {
  //   console.log('Is work');
  // }
  // function registration() {
  //   console.log('Is work');
  // }
  return (
    <>
      <header className='Logo_buttons'>
        <div className='Header__Wrapper'>
          <div className='Header__Wrapper__Logo'>
            <a href='/'>Catch the moment</a>
          </div>
          <div className='Header__Wrapper__Buttons'>
            <div className='Header__Wrapper__Buttons__Login'>
              <a
                href='../Authentication/Login/Login.jsx'
                rel='noopener noreferrer'
              >
                Login
              </a>
            </div>
            <div className='Header__Wrapper__Buttons__Registration'>
              <a
                href='../Authentication/Registration/Registration.jsx'
                rel='noopener noreferrer'
              >
                Registration
              </a>
            </div>
          </div>
          {/*<div className='Buttons'>
             <button onClick={login} className='Buttons__Button-Login'>
              Login
            </button>
            <button
              onClick={registration}
              className='Buttons__Button-Registration'
            >
              Registration
            </button>
          </div>*/}
        </div>
      </header>
    </>
  );
}

export default Header;
