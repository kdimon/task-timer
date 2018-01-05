import React from 'react';
import humanizeTimeFormat from '../converters/humanizeTimeFormat';
import {
    TableRow,
    TableRowColumn
} from 'material-ui/Table';

const TaskTimerListItem = (
    {
        description,
        createdAt,
        finishedAt,
        spentTime
    }
) => (
    <TableRow striped>
        <TableRowColumn>{description}</TableRowColumn>
        <TableRowColumn>{humanizeTimeFormat(createdAt)}</TableRowColumn>
        <TableRowColumn>{humanizeTimeFormat(finishedAt)}</TableRowColumn>
        <TableRowColumn>{humanizeTimeFormat(spentTime)}</TableRowColumn>
    </TableRow>
);

export default TaskTimerListItem;