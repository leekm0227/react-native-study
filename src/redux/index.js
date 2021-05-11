import {combineReducers, createStore} from 'redux';
import {statusReducer, gameReducer} from "./reducer";


const reducers = combineReducers({
    statusReducer,
    gameReducer,
});

export const store = createStore(reducers);