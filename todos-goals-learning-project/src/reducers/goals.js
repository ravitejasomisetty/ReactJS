import {
    ADD_GOAL,
    REMOVE_GOAL
} from '../actions/goals'

import {RECEIVE_DATA} from '../actions/shared'

export function goals(state = [], action) {
    if (action.type === ADD_GOAL) {
        state = state.concat([action.goal])
    }
    else if (action.type === REMOVE_GOAL) {
        state = state.filter(goal => goal.id !== action.goal.id)
    }
    else if (action.type === RECEIVE_DATA) {
        state = action.goals
    }
    return state
}