import './Albums.css';
import plus from 'assets/icons/plus-circle.svg';
import minus from 'assets/icons/minus-circle.svg';

const Albums = () => {
  return (
    <div>
      <div className='albums__wrap'>
        <div className='albums__back albums__back-top'>Catch the</div>
        <div className='albums__back albums__back-bottom'>Memories</div>
        <div className='albums__profile-wrap'>
          <h1 className='albums__logo'>Catch the moment</h1>
          <button className='albums__profile-btn'>S</button>
        </div>
        <div className='albums__text-wrap'>
          <h2 className='albums__title'>YOUR MEMORIES ALBUMS</h2>
          <p className='albums__subtitle'>
            Create your dream album according to yourself.
          </p>
        </div>
        <div className='albums__control-panel'>
          <button className='btn albums__control-btn'>New album</button>
          <div className='albums__control-wrap'>
            <div className='albums__checkbox-wrap'>
              <label className='albums__checkbox-label'>
                <input type='checkbox' />
              </label>
              <img
                src={plus}
                alt='increase button'
                className='albums__checkbox-plus'
              />
              <img
                src={minus}
                alt='decrease button'
                className='albums__checkbox-minus'
              />
            </div>
            <input type='search' placeholder='Search' className='form__input' />
          </div>
        </div>
        <div className='albums__container'>
          <button className='btn'>Create first Album</button>
          <div className='albums__list'></div>
        </div>
      </div>
    </div>
  );
};
export default Albums;
