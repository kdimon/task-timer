import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
    indigo500,
    grey300,
    lightBlue50
} from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
    palette: {
        primary: indigo500
    },
    textField: {
        textColor: indigo500,
        focusColor: grey300
    },
    raisedButton: {
        textColor: indigo500,
        fontSize: 12,
        fontWeight: 700
    },
    tableRow: {
        stripeColor: lightBlue50
    },
    flatButton: {
        fontSize: 12,
        fontWeight: 700
    }
});

const rootElement = document.getElementById('root');
const store = configureStore();
const jsx = (
    <MuiThemeProvider muiTheme={muiTheme}>
        <Provider store={store}>
            <AppRouter />
        </Provider>
    </MuiThemeProvider>
);

ReactDOM.render(jsx, rootElement);
registerServiceWorker();