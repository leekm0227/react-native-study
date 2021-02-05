import { combineReducers, createStore } from 'redux';

const firstNamedReducer = (state = 1, action) => state;
const secondNamedReducer = (state = 2, action) => state;
const reducers = combineReducers({
    firstNamedReducer,
    secondNamedReducer
});
export const store = createStore(reducers);
