import React from 'react';
import {
    TableHeaderColumn,
    TableRow
} from 'material-ui/Table';

const TaskTimerListHeader = () => (
    <TableRow>
        <TableHeaderColumn>№</TableHeaderColumn>
        <TableHeaderColumn>Name of task</TableHeaderColumn>
        <TableHeaderColumn>Time start</TableHeaderColumn>
        <TableHeaderColumn>Time end</TableHeaderColumn>
        <TableHeaderColumn>Time spent</TableHeaderColumn>
        <TableHeaderColumn></TableHeaderColumn>
        <TableHeaderColumn></TableHeaderColumn>
    </TableRow>
);

export default TaskTimerListHeader;