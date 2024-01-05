import React from "react";
import './ListTodo.scss'
import AddTodo from "./AddTodo";
import { toast } from 'react-toastify';
class ListTodo extends React.Component {
    state = {
        arrlistTodos: [
            { id: 'todo1', title: 'Home Work' },
            { id: 'todo2', title: 'Making Video' },
            { id: 'todo3', title: 'Code React.Js' }
        ]
    }
    addNewTodo = (todo) => {
        // let currentTodo = this.state.arrlistTodos;
        // currentTodo.push(todo);
        this.setState({
            arrlistTodos: [...this.state.arrlistTodos, todo],
            // arrlistTodos: currentTodo
        })
        toast.success("Add new todo succsess!");
    }
    render() {
        let { arrlistTodos } = this.state;
        return (
            <div className="List-todo-container">
                <AddTodo
                    addNewTodo={this.addNewTodo}
                />
                <div className="list-todo-content">
                    {arrlistTodos && arrlistTodos.length > 0 &&
                        arrlistTodos.map((item, index) => {
                            return (
                                <div className="todo-child" key={item.id}>
                                    <span> {index + 1}-{item.title} </span>
                                    <button className="btn-edit">Edit</button>
                                    <button className="btn-del">Delete</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )

    }
}
export default ListTodo;