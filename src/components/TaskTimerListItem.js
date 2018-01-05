import React from 'react';
import {connect} from 'react-redux';
import {removeTask} from "../actions/tasks";
import {Link} from 'react-router-dom';
import humanizeTimeFormat from '../converters/humanizeTimeFormat';
import RaisedButton from 'material-ui/RaisedButton';
import {
    TableRow,
    TableRowColumn
} from 'material-ui/Table';
import styles from '../index.scss';

const TaskTimerListItem = (
    {
        dispatch,
        id,
        description,
        createdAt,
        finishedAt,
        spentTime,
        taskIndex
    }
) => (
    <TableRow striped>
        <TableRowColumn>{taskIndex}</TableRowColumn>
        <TableRowColumn>{description}</TableRowColumn>
        <TableRowColumn>{humanizeTimeFormat(createdAt)}</TableRowColumn>
        <TableRowColumn>{humanizeTimeFormat(finishedAt)}</TableRowColumn>
        <TableRowColumn>{humanizeTimeFormat(spentTime)}</TableRowColumn>
        <TableRowColumn>
            <RaisedButton>
                <Link
                    to={`/details/${id}`}
                    className={styles.linkButton}
                >
                    Info
                </Link>
            </RaisedButton>
        </TableRowColumn>
        <TableRowColumn>
            <RaisedButton
                label="Delete"
                onClick={() => dispatch(removeTask({id}))}
            />
        </TableRowColumn>
    </TableRow>
);

export default connect()(TaskTimerListItem);