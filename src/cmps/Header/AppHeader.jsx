import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Burger } from './Burger.jsx';

import smiling from '../../assets/img/smiling.png';

export function AppHeader() {
  const [state, setState] = useState({
    isMobile: false,
    open: false,
  });

  useEffect(() => {
    if (window.innerWidth < 780) {
      setState({ ...state, isMobile: true });
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleOpen = () => {
    const { open, isMobile } = state;
    if (!isMobile) return;
    setState({ ...state, open: !open });
  };

  const handleResize = () => {
    setState({ ...state, isMobile: window.innerWidth < 780 });
  };

  return (
    <>
      <div className={state.open ? 'screen' : ''} onClick={toggleOpen} />
      <div className='navbar'>
        <div className='logo'>
          <Link to='/'>
            <img src={smiling} alt='smiley logo' />
          </Link>
        </div>
        <Burger open={state.open} toggleOpen={toggleOpen} />
      </div>
    </>
  );
}

// AppHeader.propTypes = {
//     user: PropTypes.object,
//     onLogin: PropTypes.func.isRequired,
//     onSignup: PropTypes.func.isRequired,
//     onLogout: PropTypes.func.isRequired
// }
