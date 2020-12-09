import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import PrivateRoute from './module/PrivateRoute';
import AuthButton from './module/AuthButton';
import LoginPage from './module/LoginPage';
import comment from './module/comment';

import Header from './module/header';
import Main from './module/main';

// Authentication server URL
export const API_URL = 'http://localhost:80';

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Header />
                <Main />
                <AuthButton />
                <ul>
                    <li>

                    </li>
                    <li>
                        <Link to="/protected">Protected Page</Link>
                    </li>
                </ul>
                <Route path="/login" component={LoginPage} />

                <PrivateRoute path="/protected" component={comment} />
            </BrowserRouter>
        );
    }
}