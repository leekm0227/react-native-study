import {combineReducers, createStore} from 'redux';

const user = (state = {token:"bf3f7c339368635a"}, action) => state;
const votes = (state = [], action) => state;

const reducers = combineReducers({
    user,
    votes,
});

export const store = createStore(reducers);
