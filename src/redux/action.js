const INCREASE_GOLD = "INCREASE_GOLD"
const INCREASE_FOOD = "INCREASE_FOOD"
const DECREASE_GOLD = "DECREASE_GOLD"
const DECREASE_FOOD = "DECREASE_FOOD"

export const decreaseGold = (amount) => ({type: DECREASE_GOLD, payload: amount})
export const decreaseFood = (amount) => ({type: DECREASE_FOOD, payload: amount})
export const increaseGold = (amount) => ({type: INCREASE_GOLD, payload: amount})
export const increaseFood = (amount) => ({type: INCREASE_FOOD, payload: amount})
