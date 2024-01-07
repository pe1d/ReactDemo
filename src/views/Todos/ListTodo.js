import React from "react";
import './ListTodo.scss'
import AddTodo from "./AddTodo";
import { toast } from 'react-toastify';
import Color from "../HOC/color";
class ListTodo extends React.Component {
    state = {
        arrlistTodos: [
            { id: 'todo1', title: 'Home Work' },
            { id: 'todo2', title: 'Making Video' },
            { id: 'todo3', title: 'Code React.Js' }
        ],
        editTodo: {}
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
    handleDelTodo = (todo) => {
        let currentTodo = this.state.arrlistTodos;
        currentTodo = currentTodo.filter(item => item.id !== todo.id);
        this.setState({
            arrlistTodos: currentTodo
        })
        toast.success("Delete todo succsess!");
        console.log('>>>>Check todo: ', todo)
    }
    hanldeEditTodo = (todo) => {
        let { editTodo, arrlistTodos } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        if (isEmptyObj === false && editTodo.id === todo.id) {
            let arrlistTodosCopy = [...arrlistTodos]
            let objIndex = arrlistTodosCopy.findIndex((item => item.id === todo.id));
            arrlistTodosCopy[objIndex].title = editTodo.title;
            this.setState({
                arrlistTodos: arrlistTodosCopy,
                editTodo: {}
            })
            toast.success("Update new todo succsess!");
            return;
        }
        else {
            this.setState({
                editTodo: todo
            })
        }
    }
    handleOnChangeEdit = (event) => {
        let editTodoCopy = { ...this.state.editTodo };
        editTodoCopy.title = event.target.value;
        this.setState({
            editTodo: editTodoCopy
        })
    }
    render() {
        <p>
            Simple Todo app with react.js (Xuan Diep)
        </p>
        let { arrlistTodos, editTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        console.log('>>>>Check empty obj: ', isEmptyObj)
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
                                    {isEmptyObj === true ?
                                        <span> {index + 1}-{item.title} </span>
                                        :
                                        <>
                                            {editTodo.id === item.id ?
                                                <span>
                                                    {index + 1} - <input value={editTodo.title} onChange={(event) => this.handleOnChangeEdit(event)}></input>
                                                </span>
                                                :
                                                <span> {index + 1}-{item.title} </span>
                                            }
                                        </>
                                    }
                                    { }
                                    <button className="btn-edit" onClick={() => this.hanldeEditTodo(item)}>
                                        {isEmptyObj === false && item.title === editTodo.title ?
                                            'Save' : 'Edit'
                                        }
                                    </button>
                                    <button className="btn-del" onClick={() => this.handleDelTodo(item)}>Delete</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )

    }
}
export default Color(ListTodo);