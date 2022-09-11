import { compose, applyMiddleware } from 'redux';
import { legacy_createStore as createStore} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
//import logger from 'redux-logger';
import { loggerMiddleware }from './middleware/logger';
import thunk from 'redux-thunk';
import { rootReducer } from './root-reducer';

const middleWares = [process.env.NODE_ENV !== 'production' && loggerMiddleware, thunk].filter(Boolean);

const composeEnhancer = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose; 

const persistConfig = {
    key: 'root',
    storage,
    whitelist:['cart']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

//  the store takes 3 params, you need rootReducer to generate store so its required
//2nd if you want to add aditional default states, its added to make it easier to test
//the next is the middleWares
export const store = createStore(persistedReducer, undefined, composedEnhancers);

export const persistor = persistStore(store);


