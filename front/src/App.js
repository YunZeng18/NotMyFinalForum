import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import PrivateRoute from './module/PrivateRoute';
import axios from 'axios';
import LoginPage from './module/LoginPage';
import comment from './module/comment';
import Header from './module/header/header';
import Main from './module/main';

// Authentication server URL
export const API_URL = 'http://localhost:80';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuthenticated: false,
            user: null,
        };
        this.handleLogout = this.handleLogout.bind(this);
    }
    componentDidMount() {
        // Check auth
        axios
            .get(`${API_URL}/check-auth`, { withCredentials: true })
            .then((res) => {
                this.setState({
                    isAuthenticated: true,
                    user: res.data,
                });
            })
            .catch(() => {
                this.setState({
                    isAuthenticated: false,
                });
            });
    }
    handleLogout() {
        const url = `${window.location.protocol}//${window.location.host}`;
        window.location = `${API_URL}/logout?from=${url}`;
    }
    render() {
        return (
            <BrowserRouter>
                <Header user={this.state.user} isAuthenticated={this.state.isAuthenticated} onLogout={this.handleLogout} />
                <Main />

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