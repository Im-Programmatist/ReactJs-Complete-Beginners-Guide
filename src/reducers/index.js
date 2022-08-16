import {changeNumberReducer} from './upDown';
import {myStateTestReducer} from './MyTest';

import {combineReducers} from "redux";

const rootReducer = combineReducers({
    myStateTest: myStateTestReducer,
    changeNumber: changeNumberReducer,
});

export default rootReducer;