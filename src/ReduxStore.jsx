import {createStore} from 'redux';
import rootReducer from './reducers/index';

//const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const initialState = { 
    changeNumber:10 ,
    myStateTest:"Value set from store!"
};
//const store = createStore(rootReducer);

const store = createStore(rootReducer);

export default store;