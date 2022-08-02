import { compose, applyMiddleware } from 'redux';
import { legacy_createStore as createStore} from 'redux';
import logger from 'redux-logger';
import { rootReducer } from './root-reducer';

const middleWares = [logger];

const composedEnhancers = compose(applyMiddleware(...middleWares));

//  the store takes 3 params, you need rootReducer to generate store so its required
//2nd if you want to add aditional default states, its added to make it easier to test
//the next is the middleWares
export const store = createStore(rootReducer, undefined, composedEnhancers);


