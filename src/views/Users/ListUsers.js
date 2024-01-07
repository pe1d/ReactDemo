import React from "react";
import axios from 'axios';
import './ListUsers.scss'
import { withRouter } from "react-router-dom/cjs/react-router-dom";
class ListUsers extends React.Component {
    state = {
        ListUsers: []
    }

    async componentDidMount() {
        // axios.get('https://reqres.in/api/users?page=1')
        //     .then(res => {
        //         console.log('>>>>Check res ', res.data.data)
        //     })
        let res = await axios.get('https://reqres.in/api/users?page=1')
        this.setState({
            ListUsers: res && res.data && res.data.data ? res.data.data : []
        })
    }
    handleOnClickDetail = (user) => {
        this.props.history.push(`/users/${user.id}`)
    }
    render() {
        let { ListUsers } = this.state;
        return (
            <div className="list-container">
                <div className="title">
                    Fetch all list users
                </div>
                <div className="list-content">
                    {ListUsers && ListUsers.length > 0 &&
                        ListUsers.map((item, index) => {
                            return (
                                <div className="child" key={item.id} onClick={() => this.handleOnClickDetail(item)}>
                                    {index + 1} - {item.first_name} {item.last_name}
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        )
    }
}
export default withRouter(ListUsers);