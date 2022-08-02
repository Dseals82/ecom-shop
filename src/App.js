import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route, } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import Home from "./routes/home/home.component";
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import CheckOut from './routes/check-out/check-out.component';
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "./utils/firebase.utils";
import { setCurrentUser } from './store/user/user.action';



const App = () => {
  //dispatch will not change, but we add to dependency array to prevent lint error
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
        //create user document only if user comes through.  Otherwise, set current user
        if(user){
            createUserDocumentFromAuth(user);  
        }
        //will either be null or authenticated object
        dispatch(setCurrentUser(user));
    });
    return unsubscribe
},[dispatch])

 

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />}/>
        <Route path='shop/*' element={<Shop />}/>
        <Route path='auth' element={<Authentication />}/>
        <Route path='checkout' element={<CheckOut />}/>
      </Route>
    </Routes>  
  );
}

export default App;
