import React from 'react';
import {
    TableHeaderColumn,
    TableRow
} from 'material-ui/Table';

const TaskTimerListHeader = () => (
    <TableRow>
        <TableHeaderColumn>Name of task</TableHeaderColumn>
        <TableHeaderColumn>Time start</TableHeaderColumn>
        <TableHeaderColumn>Time end</TableHeaderColumn>
        <TableHeaderColumn>Time spent</TableHeaderColumn>
    </TableRow>
);

export default TaskTimerListHeader;