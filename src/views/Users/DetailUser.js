import axios from "axios";
import React from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom";
class DetailUser extends React.Component {

    state = {
        user: {}
    }
    async componentDidMount() {
        if (this.props.match && this.props.match.params) {
            let id = this.props.match.params.id;
            let res = await axios.get(`https://reqres.in/api/users/${id}`);
            this.setState({
                user: res && res.data && res.data.data ? res.data.data : {}
            })
            console.log(">>>Check user: ", res)
        }

    }
    handleClickBack = () => {
        this.props.history.push('/users');
    }
    render() {
        let { user } = this.state;
        let isEmptyObj = Object.keys(user).length === 0;
        console.log(">>>>>>This props: ", this.props)
        return (
            <>
                <div>Hello world with detailsUser {this.props.match.params.id}</div>
                {isEmptyObj === false &&
                    <>
                        <div>Users name: {user.first_name} {user.last_name}</div>
                        <div>Users's email: {user.email}</div>
                        <div>
                            <img src={user.avatar}></img>
                        </div>
                        <button type="button" onClick={() => this.handleClickBack()}>BACK</button>
                    </>
                }

            </>
        )
    }
}
export default withRouter(DetailUser);