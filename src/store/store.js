import { compose, applyMiddleware } from 'redux';
import { legacy_createStore as createStore} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
//import logger from 'redux-logger';
import { rootReducer } from './root-reducer';

const loggerMiddleware = (store) => (next) => (action) => {
    if(!action.type){
        return next(action)
    }
    console.log('type', action.type)
    console.log('payload', action.payload)
    console.log('currentState', store.getState())

    next(action)

    console.log('next state', store.getState())
}

const middleWares = [loggerMiddleware];

const composedEnhancers = compose(applyMiddleware(...middleWares));

//  the store takes 3 params, you need rootReducer to generate store so its required
//2nd if you want to add aditional default states, its added to make it easier to test
//the next is the middleWares
export const store = createStore(rootReducer, undefined, composedEnhancers);


