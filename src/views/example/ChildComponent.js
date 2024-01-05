import React from "react";
import './demo.scss';
class ChildComponent extends React.Component {
    state = {
        showJobs: false
    }
    handleClick = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }
    handleOnClickDel = (job) => {
        console.log('>>>>>HandleOnClickDel: ', job)
        this.props.delJob(job)
    }
    render() {
        let { arrJobs } = this.props;
        let { showJobs } = this.state;
        // let check = showJobs === true ? 'showJobs = true' : 'showJobs = false';
        // console.log('>>>>Check show jobs: ', check)
        return (
            <>
                {showJobs === false ?
                    <div>
                        <button className='btn_show' onClick={() => this.handleClick()}>Show</button>
                    </div>
                    :
                    <>
                        <div className="Job-lists">
                            {
                                arrJobs.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary} <></> <span onClick={() => this.handleOnClickDel(item)}>x</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <button onClick={() => this.handleClick()}>Hide</button>
                        </div>
                    </>
                }
            </>
        )
    }
}
// const ChildComponent = (props) => {
//     let { arrJobs } = props;
//     return (
//         <>
//             <div className="Job-lists">
//                 {
//                     arrJobs.map((item, index) => {
//                         if (item.salary >= 500) {
//                             return (
//                                 <div key={item.id}>
//                                     {item.title} - {item.salary} $
//                                 </div>
//                             )
//                         }
//                     })
//                 }
//             </div>
//         </>
//     )
// }
export default ChildComponent;