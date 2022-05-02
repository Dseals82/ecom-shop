import './navigation.styles.scss';
import { Outlet, Link } from 'react-router-dom';
import { Fragment, useContext } from 'react';
import { ReactComponent as Logo } from '../../assets/img/crown.svg';
import { UserContext } from '../../context/user.context';
import { signOutUser } from '../../utils/firebase.utils';


const Navigation = () => {
  //import useContex then pass in UserContext
  //Desctructure object for the user value
  //useContext re renders component
  const { currentUser, } = useContext(UserContext);

  return (
    <Fragment>
      <nav className='navigation'>
        <Link className='logo-container' to="/">
            <Logo />
        </Link>
        <div className='nav-links-container'>
            <Link className="nav-link" to='shop'>SHOP</Link>
            {
              currentUser? (
                <span className="nav-link" onClick={signOutUser}>{" "}SIGN OUT{" "}</span>
              ) :
              (
                <Link className="nav-link" to='auth'>SIGN IN</Link>
              )
            }
            
        </div>
      </nav>
      <Outlet />
    </Fragment>
  )
};

  export default Navigation