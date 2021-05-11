import {decreaseGold, decreaseFood, increaseGold, increaseFood} from "./action"

export const statusReducer = (state = {gold: 1000, food: 10}, action) => {
    switch (action.type) {
        case increaseGold:
            return {...state, gold: state.gold + action.payload}
        case increaseFood:
            return {...state, gold: state.gold + action.payload}
        case decreaseGold:
            return {...state, food: state.food - action.payload}
        case decreaseFood:
            return {...state, food: state.food - action.payload}
    }

    return state
}

export const gameReducer = (state = [], action) => state;