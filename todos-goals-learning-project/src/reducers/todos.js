import {
    ADD_TODO,
    REMOVE_TODO
 } from '../actions/todos'
 import {RECEIVE_DATA} from '../actions/shared'

export function todos(state = [], action) {
    if (action.type === ADD_TODO) {
        state = state.concat([action.todo])
    }
    else if (action.type === REMOVE_TODO) {
        state = state.filter(todo => todo.id !== action.todo.id)
    }
    else if (action.type === RECEIVE_DATA) {
        state = action.todos
    }
    return state
}