import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import TaskTimerListHeaderShort from './TaskTimerListHeaderShort';
import TaskTimerListItemShort from './TaskTimerListItemShort';
import {
    Table,
    TableBody,
    TableHeader
} from 'material-ui/Table';
import styles from '../index.scss';

const DetailsTaskTimerPage = props => (
    <div>
        <h2 className={styles.title}>Welcome to Details Page!</h2>
        <Table>
            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                <TaskTimerListHeaderShort />
            </TableHeader>
            <TableBody>
                <TaskTimerListItemShort {...props.task} />
            </TableBody>
        </Table>
        <RaisedButton className={styles.buttonAlignRight}>
            <Link
                to="/"
                className={styles.linkButton}
            >
                Back
            </Link>
        </RaisedButton>
    </div>
);

const mapStateToProps = (state, props) => ({
    task: state.tasks.find(task => task.id === props.match.params.id)
});

export default connect(mapStateToProps)(DetailsTaskTimerPage);