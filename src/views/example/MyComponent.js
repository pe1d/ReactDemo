import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";
class MyComponent extends React.Component {

    state = {
        arrJobs: [
            { id: 'abc Job1', title: 'Developer', salary: '500' },
            { id: 'abc Job2', title: 'Tester', salary: '400' },
            { id: 'abc Job3', title: 'Project Manager', salary: '500' }
        ]
    }
    addNewJob = (job) => {
        console.log('check job from child: ', job)
        // let currentJobs = this.state.arrJobs;
        // currentJobs.push(job);
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
            // arrJobs: currentJobs
        })
    }
    delJob = (job) => {
        let currentJobs = this.state.arrJobs;
        currentJobs = currentJobs.filter(item => item.id !== job.id)
        this.setState({
            arrJobs: currentJobs
        })
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('>>Run did Update: ', 'prev State: ', prevState, 'current State: ', this.state)
    }
    componentDidMount() {
        console.log(">>>>Run component did mount")
    }
    render() {
        console.log(' >>>>>>> Call render', this.state)
        return (
            <>
                <AddComponent
                    addNewJob={this.addNewJob}
                />
                <ChildComponent
                    arrJobs={this.state.arrJobs}
                    delJob={this.delJob}

                />
            </>
        )
    }
}

export default MyComponent;