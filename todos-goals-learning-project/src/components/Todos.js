import React from 'react'
import {List} from './List'
import {connect} from 'react-redux'
import {
    handleAddTodo,
    handleDeleteTodo
} from '../actions/todos'

class Todos extends React.Component {
    addTodoItem = (e) => {
        e.preventDefault()
        const value = this.input.value

        if (!value)
            return

        this.props.dispatch(handleAddTodo(value,
            () => this.input.value =''
        ))
    }

    render() {
        const { todos } = this.props
        return (
            <div>
                TODOS
                <input type='text'
                    placeholder='ADD TODO'
                    ref={(input) => this.input = input} />
                <button onClick={this.addTodoItem}>Add Todo</button>
                <List items={todos} />
            </div>
        )
    }
}


export default connect((state) => ({
    todos: state.todos
}))(Todos)