import React from 'react';
import {connect} from 'react-redux';
import {addTaskCreator} from '../actions/tasks';
import humanizeTimeFormat from '../converters/humanizeTimeFormat';
import randomNumber from '../converters/randomNumber';
import TaskWarningModal from './TaskWarningModal';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import styles from '../index.scss';

class TaskForm extends React.Component {
    state = {
        id: '',
        description: '',
        createdAt: '',
        finishedAt: '',
        spentTime: undefined,
        running: false,
        timer: undefined,
        filledDescription: undefined
    };

    onDescriptionChange = e => {
        const description = e.target.value;

        this.setState({description});
    };

    handleClearFilledDescription = () => {
        this.setState({filledDescription: undefined});
    };

    handleRunTimer = e => {
        e.preventDefault();

        const startTime = Date.now();
        let timer = this.state.timer;

        this.setState(prevState => {
            if(prevState.running) {
                clearInterval(timer);
            }else {
                timer = setInterval(() => {
                    this.setState({
                        createdAt: startTime,
                        spentTime: Date.now() - startTime
                    });
                }, 1000);
            }

            return {
                running: !prevState.running,
                timer
            };
        });
    };

    handleStopTimer = e => {
        e.preventDefault();

        const description = this.state.description;
        const startTime = this.state.createdAt;
        const endTime = Date.now();
        const spentTime = endTime - startTime;
        const timer = this.state.timer;

        if(description === '') {
            this.setState({filledDescription: !description});
            return;
        }

        const id = randomNumber();

        this.props.addTaskCreator(id, description, startTime, endTime, spentTime);
        clearInterval(timer);
        this.setState({
            id: '',
            description: '',
            createdAt: Date.now(),
            finishedAt: '',
            spentTime: undefined,
            running: !this.state.running,
            timer: undefined
        });
    };

    render() {
        const running = this.state.running;
        let button = null;

        if(!running) {
            button = <RaisedButton
                        label="Start"
                        onClick={this.handleRunTimer}
                    />;
        }else {
            button = <RaisedButton
                        label="Stop"
                        onClick={this.handleStopTimer}
                    />;
        }

        return (
            <div className={styles.form}>
                <form>
                    <div>
                        <TextField
                            hintText="Enter name of your task"
                            floatingLabelText="Enter name of your task"
                            value={this.state.description}
                            onChange={this.onDescriptionChange}
                        />
                    </div>
                    <div>
                        <Paper
                            zDepth={2}
                            circle={true}
                            className={styles.timerWrapper}
                        >
                            <span className={styles.timer}>
                                {this.state.spentTime === undefined ? "00:00:00" : humanizeTimeFormat(this.state.spentTime)}
                                </span>
                        </Paper>
                    </div>
                    <div>
                        {button}
                    </div>
                </form>
                <TaskWarningModal
                    filledDescription={this.state.filledDescription}
                    handleClearFilledDescription={this.handleClearFilledDescription}
                />
            </div>
        );
    }
}

export default connect(null, {addTaskCreator})(TaskForm);