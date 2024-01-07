import React from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom";
import color from "../HOC/color";
import logo from "../../assets/images/Screenshot 2024-01-04 165303.png";
import { connect } from 'react-redux';
class Home extends React.Component {
    componentDidMount() {
        // setTimeout(() => {
        //     this.props.history.push('/todo')
        // }, 3000)
    }
    hanldeClickDel = (users) => {
        console.log('Check user del:', users)
        this.props.deleteUserRedux(users);
    }
    hanldeClickCreate = () => {
        this.props.addUserRedux();
    }
    render() {
        console.log("Check prop redux", this.props)
        let { dataRedux } = this.props;
        return (
            <>
                <div> Xuan Diep</div>
                <img src={logo} style={{ width: '100px', height: 'auto' }}></img>
                <div>
                    {dataRedux && dataRedux.length > 0 &&
                        dataRedux.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {index + 1} - {item.name} -
                                    <span onClick={() => this.hanldeClickDel(item)}> X</span>
                                </div>
                            )
                        })
                    }
                    <button onClick={() => this.hanldeClickCreate()}>ADD NEW</button>
                </div>
            </>
        )
    }
}
// export default withRouter(Home);

const mapStateToProps = (state) => {
    return {
        dataRedux: state.users
    }
}
const mapDispathtoProps = (dispath) => {
    return {
        deleteUserRedux: (userDelete) => dispath({ type: 'Delete_user', payload: userDelete }),
        addUserRedux: (userAdd) => dispath({ type: 'Add_user' })
    }
}

export default connect(mapStateToProps, mapDispathtoProps)(color(Home));
