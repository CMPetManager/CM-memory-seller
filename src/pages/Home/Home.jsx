import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Slider from '../../components/Slider/Slider';

import './Home.css';

function Home() {
  return (
    <>
      <div className='Home'>
        <div className='Home__BackgroundText'>
          <div className='Home__BackgroundText__First'>Catch the</div>
          <div className='Home__BackgroundText__Second'>Memories</div>
        </div>
        <Header />
        <Slider />
        <main>
          <section className='Discription'>
            <div className='Discription__Wrapper'>
              <h1>Making memories</h1>
              <p>
                Share and collect photos and videos.
                <br />
                Relive the most beautiful moments.
              </p>
            </div>
          </section>
        </main>
        <Outlet />
      </div>
    </>
  );
}

export default Home;
