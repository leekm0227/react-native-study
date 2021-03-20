import {combineReducers, createStore} from 'redux';
import {userTicketDecrease, userUpdate} from "~/redux/action"


const user = (state = {}, action) => {
    switch (action.type) {
        case userUpdate:
            return action.payload
        case userTicketDecrease:
            return {...state, ticket: state.ticket - action.payload}
        default:
            return state
    }
}

const votes = (state = [], action) => state;

const reducers = combineReducers({
    user,
    votes,
});

export const store = createStore(reducers);
