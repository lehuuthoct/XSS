import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';
import List from './List';
import './Todo.css';

class Todo extends Component {
    constructor(props) {
        super();
        this.state = {
            task: '',
            items: []
        }
    }

    componentWillMount() {
        // init tasks
        this.setState({
            items: [
                { id: uuidv4(), task: 'Learn React', completed: false },
                { id: uuidv4(), task: 'Learn Redux', completed: false },
                { id: uuidv4(), task: 'Learn Jest Enzyme', completed: false },
            ]
        });
    }

    handleOnChange = e => {
        const { value } = e.target
        // const {target: {value}} = e;
        console.log('handleOnChange', value, this.state);
        this.setState({
            task: value
        })
    }

    // handleOnSubmit(e) => error, cannot recognize this
    handleOnSubmit = e => {
        console.log('handleOnSubmit', this.state);

        // Prevent default to avoid the actual form submit...
        e.preventDefault();

        // reset task & push new task to items    
        if (this.state.task.trim() !== '') {
            this.setState({
                task: '',
                items: [
                    ...this.state.items,
                    { id: uuidv4(), task: this.state.task, completed: false }
                ]
            })
        }
    }

    markAsCompleted = id => {
        // find task by id
        const foundTask = this.state.items.find(
            task => task.id === id
        );

        // update task status
        foundTask.completed = true;

        // update state with updated task
        this.setState({
            items: [
                ...this.state.items,
                ...foundTask
            ]
        })
    }

    removeTask = id => {
        // filter tasks that have different id
        const filteredTasks = this.state.items.filter(
            task => task.id !== id
        );
        // update items
        this.setState({
            items: filteredTasks
        })
    }

    render() {
        const totalTasks = this.state.items.length;

        return (
            <div className='Todo'>
                <h1>New Task: </h1>
                {/* init new task form */ }
                <form onSubmit={ this.handleOnSubmit }>
                    <input value={ this.state.task }
                        onChange={ this.handleOnChange }
                    />
                </form>

                <p>Total tasks: { totalTasks } </p>


                {/* show tasks */ }
                <List
                    items={ this.state.items }
                    markAsCompleted={ this.markAsCompleted }
                    removeTask={ this.removeTask }
                />
            </div>
        )
    }
}

export default Todo;