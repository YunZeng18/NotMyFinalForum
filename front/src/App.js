import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import PrivateRoute from './module/PrivateRoute';
import axios from 'axios';
import LoginPage from './module/LoginPage';
import Comment from './module/comment';
import Header from './module/header/header';
import SideNav from './module/SideNav';
import Home from './module/Home';

// Authentication server URL
export const API_URL = 'http://localhost:80';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuthenticated: false,
            user: null,
            userForums: null
        };
        this.handleLogin = this.handleLogin.bind(this);
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
    componentDidUpdate(prevProp, prevState, snapshot) {
        console.log(prevProp, prevState, snapshot);
        if (this.state.isAuthenticated) {
            console.log('getuserforums');
        }
    }
    handleLogout() {
        const url = `${window.location.protocol}//${window.location.host}`;
        window.location = `${API_URL}/logout?from=${url}`;
    }
    handleLogin() {
        console.log(this);
        // Change location to /login server route while sending a redirect url
        // If user is coming from a page different than /, get the page they
        // are coming from, otherwise redirect to / after login
        const { from } = { from: { pathname: '/' } };
        const url = `${window.location.protocol}//${window.location.host}${from.pathname}`;
        window.location = `${API_URL}/login/?from=${url}`;

    }
    render() {
        return (
            <BrowserRouter>
                <Header user={this.state.user} isAuthenticated={this.state.isAuthenticated} onLogin={this.handleLogin} onLogout={this.handleLogout} />
                <SideNav />
                <Switch>
                    <Route path="/" component={Home} exact />
                </Switch>

                <ul>
                    <li>

                    </li>
                    <li>
                        <Link to="/protected">Protected Page</Link>
                    </li>
                </ul>
                <Route path="/login" component={LoginPage} />

                <PrivateRoute path="/protected" component={Comment} />
            </BrowserRouter>
        );
    }
}