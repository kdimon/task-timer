import React from 'react';
import {connect} from 'react-redux';
import TaskTimerListItem from './TaskTimerListItem';

class TaskTimerListItems extends React.Component {
    render() {
        return (
            <React.Fragment>
                {this.props.tasks.map((task, index) => (
                    <TaskTimerListItem key={`id${index}`} {...task} taskIndex={index + 1} />
                ))}
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        tasks: state.tasks
    };
};

export default connect(mapStateToProps)(TaskTimerListItems);