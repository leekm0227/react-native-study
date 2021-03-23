import {userTicketDecrease, userUpdate} from "~/redux/action"

export const userReducer = (state = {}, action) => {
    switch (action.type) {
        case userUpdate:
            return action.payload
        case userTicketDecrease:
            return {...state, ticket: state.ticket - action.payload}
    }

    return state
}

export const voteReducer = (state = [], action) => state;



