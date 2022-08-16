
//Reducers are pure functions- these are depends on it's arguments and does not changes any of it's argument
//DOES NOT DEPEND ON OTHER EXTERNAL PARAMETERS
//Reducers are called automatically when action is dispatched. ==> All reducers connected to the store & present in project get called for every action dispatched.

const initialCount = 0;
export const changeNumberReducer = (state = initialCount, action) => {
    switch(action.type){
        case 'INCREMENT' : return state + action.payload;
        case 'DECREMENT' : return state - 1;
        default: return state;
    }
}
