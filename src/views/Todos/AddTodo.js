import React from "react";
import { toast } from 'react-toastify';
class AddTodo extends React.Component {
    state = {
        title: ''
    }
    handleChangeTodo = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleClickAddtodo = () => {
        if (!this.state.title) {
            toast.error('Missing title todo!')
            return;
        }
        let todo = {
            id: Math.floor(Math.random() * 10000),
            title: this.state.title
        }
        this.props.addNewTodo(todo);
        this.setState({
            title: ''
        })
    }
    render() {
        let { title } = this.state;
        return (
            <div className="add-todo">
                <input type="text" value={title}
                    onChange={(event) => this.handleChangeTodo(event)}
                />
                <button className="btn-add"
                    onClick={() => this.handleClickAddtodo()}
                >ADD
                </button>
            </div>
        )
    }
}
export default AddTodo;