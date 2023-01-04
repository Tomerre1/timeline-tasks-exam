import homeSvg from '../assets/img/animated_tasks.gif';
import { Link } from 'react-router-dom';
export function AppPage({ history }) {
  return (
    <div className='app-page'>
      <section className='home' id='home'>
        <div className='content'>
          <h3 className='right'>Welcome</h3>
          <p>Welcome to MyTimelineEvents App</p>
          <button
            className='home-page-btn clean-btn'
            onClick={() => history.push('/timeline')}
          >
            To My Timeline
          </button>
        </div>
        <div className='image'>
          <img src={homeSvg} alt='home img' />
        </div>
      </section>
    </div>
  );
}
