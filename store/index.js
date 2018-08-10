//Subreducer
function todos(state = [], action){
    if(action.type === 'ADD_TODO'){
        state = state.concat([action.todo])
    }
    else if(action.type === 'REMOVE_TODO'){
        state.filter(todo => todo.id !== action.todo)
    }
    return state
}

//Subreducer
function goals(state = [], action){
    if(action.type === 'ADD_GOAL'){
        state = state.concat([action.goal])
    }
    else if(action.type === 'REMOVE_GOAL'){
        state.filter(goal => goal.id !== action.goal)
    }
    return state
}

//Root reducer
function app(state = {}, action){
    return {
        todos: todos(state.todos, action),
        goals: goals(state.goals, action)
    }
}

//My Store
function createStore(reducer){
    let state
    let listeners = []

    const getState = () => state

    const subscribe = (listener) => {
        listeners.push(listener)
    }

    const unsubscribe = (listener) => {
        listeners = listeners.filter((l) => l !== listener)
    }

    const dispatch = (action) => {
        state = reducer(action)
        listeners.forEach((listener) => listener())
    }

    return {
        getState,
        subscribe,
        unsubscribe,
        dispatch
    }
}