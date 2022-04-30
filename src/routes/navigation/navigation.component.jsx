import './navigation.styles.scss';
import { Outlet, Link } from 'react-router-dom';
import { Fragment } from 'react';
import { ReactComponent as Logo } from '../../assets/img/crown.svg';

const Navigation = () => (
    <Fragment>
      <nav className='navigation'>
        <Link className='logo-container' to="/">
            <Logo />
        </Link>
        <div className='nav-links-container'>
            <Link className="nav-link" to='shop'>SHOP</Link>
            <Link className="nav-link" to='auth'>SIGN IN</Link>
        </div>
      </nav>
      <Outlet />
    </Fragment>
  );

  export default Navigation