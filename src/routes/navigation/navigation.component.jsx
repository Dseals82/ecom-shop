// import './navigation.styles.scss';
import { Outlet, } from 'react-router-dom';
import { Fragment, useContext } from 'react';
import { ReactComponent as Logo } from '../../assets/img/crown.svg';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { UserContext } from '../../context/user.context';
import { signOutUser } from '../../utils/firebase.utils';
import { CartContext } from '../../context/cart.context';
import { NavigationContainer, LogoContainer, NavLink, NavLinksContainer } from './navigation.styles';


const Navigation = () => {
  //import useContex then pass in UserContext
  //Desctructure object for the user value
  //useContext re renders component
  const { currentUser, } = useContext(UserContext);
  const { toggleCart, setToggleCart,} = useContext(CartContext)

  const handleClick = () => {
    setToggleCart(!toggleCart)
  }

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
            <Logo />
        </LogoContainer>
        <NavLinksContainer>
            {/*<NavLink to='shop'>SHOP</NavLink>*/}
            <NavLink to='shop'>SHOP</NavLink>
            {
              currentUser? (
                <NavLink as='span' onClick={signOutUser}>{" "}SIGN OUT{" "}</NavLink>
              ) :
              (
                <NavLink to='auth'>SIGN IN</NavLink>
              )
            }
      
            <CartIcon onClick={handleClick} />
        </NavLinksContainer>

          {toggleCart && <CartDropdown /> }
        
      </NavigationContainer>
      <Outlet />
    </Fragment>
  )
};

  export default Navigation