import React from "react";

class ChildComponent extends React.Component {

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
        return (
            <>
                <div>
                    child Component {this.props.name}
                </div>
            </>
        )
    }
}

export default ChildComponent;