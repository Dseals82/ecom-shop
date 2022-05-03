import './navigation.styles.scss';
import { Outlet, Link } from 'react-router-dom';
import { Fragment, useContext } from 'react';
import { ReactComponent as Logo } from '../../assets/img/crown.svg';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { UserContext } from '../../context/user.context';
import { signOutUser } from '../../utils/firebase.utils';
import { CartContext } from '../../context/cart.context';


const Navigation = () => {
  //import useContex then pass in UserContext
  //Desctructure object for the user value
  //useContext re renders component
  const { currentUser, } = useContext(UserContext);
  const { toggleCart, setToggleCart,} = useContext(CartContext)

  const handleClick = () => {
    setToggleCart(!toggleCart)
    console.log('I am toggle: ',toggleCart)
  }

  return (
    <Fragment>
      <nav className='navigation'>
        <Link className='logo-container' to="/">
            <Logo />
        </Link>
        <div className='nav-links-container'>
            <Link className="nav-link" to='shop'>SHOP</Link>
            <Link className="nav-link" to='shop'>SHOP</Link>
            {
              currentUser? (
                <span className="nav-link" onClick={signOutUser}>{" "}SIGN OUT{" "}</span>
              ) :
              (
                <Link className="nav-link" to='auth'>SIGN IN</Link>
              )
            }
      
            <CartIcon onClick={handleClick} />
        </div>

        {toggleCart && <CartDropdown /> }
        
      </nav>
      <Outlet />
    </Fragment>
  )
};

  export default Navigation