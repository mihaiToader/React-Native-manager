import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
    componentWillMount() {
        console.log('ok');
        const config = {
            apiKey: 'AIzaSyAPkjgtzjd2KyP1eTZz3LBr5BWIiczpdmo',
            authDomain: 'manager-38e40.firebaseapp.com',
            databaseURL: 'https://manager-38e40.firebaseio.com',
            projectId: 'manager-38e40',
            storageBucket: '',
            messagingSenderId: '783432349046'
          };
          firebase.initializeApp(config);
    }
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;
