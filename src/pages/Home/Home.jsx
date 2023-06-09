import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Slider from '../../components/Slider/Slider';

import './Home.css';

function Home() {
  return (
    <>
      <div className='home'>
        <div className='home__background-text'>
          <div className='home__background-text_first'>Catch the</div>
          <div className='home__background-text_second'>Memories</div>
        </div>
        <Header />
        <Slider />
        <main>
          <section className='discription'>
            <h1 className='discription__title'>Making memories</h1>
            <p className='discription__content'>
              Share and collect photos and videos.
              <br />
              Relive the most beautiful moments.
            </p>
          </section>
        </main>
        <Outlet />
      </div>
    </>
  );
}

export default Home;
