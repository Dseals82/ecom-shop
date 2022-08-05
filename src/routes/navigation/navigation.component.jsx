// import './navigation.styles.scss';
import { Outlet, } from 'react-router-dom';
import { Fragment, useContext } from 'react';
import { useSelector } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/img/crown.svg';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
//import { UserContext } from '../../context/user.context';
import { signOutUser } from '../../utils/firebase.utils';
//import { CartContext } from '../../context/cart.context';
import { selectCurrentUser } from '../../store/user/user.selector';
import { NavigationContainer, LogoContainer, NavLink, NavLinksContainer } from './navigation.styles';
import { useDispatch } from 'react-redux';
import { selectToggleCart } from '../../store/cart/cart.selector';
import { setToggleCart } from '../../store/cart/cart.action'

const Navigation = () => {
  //import useContex then pass in UserContext
  //Desctructure object for the user value
  //useContext re renders component
  //const { currentUser, } = useContext(UserContext);
  const dispatch = useDispatch()
  

  const toggleCart = useSelector(selectToggleCart)
  const currentUser = useSelector(selectCurrentUser)
  
  //const { toggleCart, setToggleCart,} = useContext(CartContext)

  const handleClick = () => {
   dispatch(setToggleCart(!toggleCart))
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