import React from 'react';
import TaskForm from './TaskForm';
import TaskTimerListHeader from './TaskTimerListHeader';
import TaskTimerListItems from './TaskTimerListItems';
import {
    Table,
    TableBody,
    TableHeader
} from 'material-ui/Table';

const TaskTimerDashboardPage = () => (
    <div>
        <TaskForm />
        <Table>
            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                <TaskTimerListHeader />
            </TableHeader>
            <TableBody>
                <TaskTimerListItems />
            </TableBody>
        </Table>
    </div>
);

export default TaskTimerDashboardPage;