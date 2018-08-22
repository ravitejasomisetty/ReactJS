import React from 'react'
import {List} from './List'
import {connect} from 'react-redux'
import {
    handleAddGoal,
    handleDeleteGoal
} from '../actions/goals'

class Goals extends React.Component {
    addGoalItem = (e) => {
        e.preventDefault()
        const value = this.input.value

        if (!value)
            return

        this.props.dispatch(handleAddGoal(value,
            () => this.input.value =''
        ))
    }

    render() {
        const { goals } = this.props
        return (
            <div>
                GOALS
                <input type='text'
                    placeholder='ADD GOAL'
                    ref={(input) => this.input = input} />
                <button onClick={this.addGoalItem}>Add Goal</button>
                <List items={goals} />
            </div>
        )
    }
}


export default connect((state) => ({
    goals: state.goals
}))(Goals)