import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';
import DetailsTaskTimerPage from '../components/TaskTimerDetailsPage';
import NotFoundPage from './../components/NotFoundPage';
import TaskTimerDashboardPage from './../components/TaskTimerDashboardPage';
import styles from '../index.scss';

const AppRouter = () => (
    <BrowserRouter>
        <div className={styles.wrapper}>
            <Switch>
                <Route path="/" component={TaskTimerDashboardPage} exact />
                <Route path="/details/:id" component={DetailsTaskTimerPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;