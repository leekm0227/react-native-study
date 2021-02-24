import { combineReducers, createStore } from 'redux';

const messageList = [];
for (let i = 0; i < 20; i++) {
    messageList.push({
        id:i,
        imgUrl:"test",
        name:"user name"+i,
        content:"message test"+i,
    });
}

const todoList = {};
for(let i=0;i<5;i++) {
    let today = new Date();
    let date = new Date(today.getFullYear(),today.getMonth(),today.getDate()+i).toISOString().split("T")[0];
    let list = [];

    for (let j = 0; j < 20; j++) {
        list.push({
            id: j,
            date: date,
            subject: "todo day " + date + " "+j,
            isComplete: false,
        });
    }

    todoList[date] = list;
}

const messages = (state = messageList, action) => state;
const todos = (state = todoList, action) => state;

const reducers = combineReducers({
    messages,
    todos,
});

export const store = createStore(reducers);
