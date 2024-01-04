import React from "react";
import ChildComponent from "./ChildComponent";
class MyComponent extends React.Component {

    state = {
        fName: '',
        lName: ''
    }
    handleChangeFName = (event) => {
        this.setState({
            fName: event.target.value
        })
    }
    handleChangeLName = (event) => {
        this.setState({
            lName: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        console.log(">>>Check data input", this.state)
    }
    render() {
        console.log(' >>>>>>> Call render', this.state)
        return (
            <>
                <form>
                    <label htmlFor='fname'>First name</label><br />
                    <input type="text" value={this.state.fName}
                        onChange={(event) => this.handleChangeFName(event)} /><br />
                    <label htmlFor='Lname'>Last name</label><br />
                    <input type="text" value={this.state.lName}
                        onChange={(event) => this.handleChangeLName(event)} /><br />
                    <input type="submit"
                        onClick={(event) => this.handleSubmit(event)} />
                </form>
                <ChildComponent name={'child one'} />
                <ChildComponent name={'child two'} />
                <ChildComponent name={'child three'} />
            </>
        )
    }
}

export default MyComponent;