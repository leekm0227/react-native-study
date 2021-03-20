const USER_UPDATE = "UPDATE_USER"
const USER_TICKET_DECREASE = "USER_TICKET_DECREASE"

export const userUpdate = (user) => ({type: USER_UPDATE, payload: user})
export const userTicketDecrease = (amount) => ({type: USER_TICKET_DECREASE, payload: amount})
