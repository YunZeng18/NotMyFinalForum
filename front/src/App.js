import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import PrivateRoute from './module/PrivateRoute';
import axios from 'axios';
import LoginPage from './module/LoginPage';
import Comment from './module/comment';
import Header from './module/header/header';
import SideNav from './module/SideNav';
import Home from './module/Home';
import ForumList from './module/forumList';

// Authentication server URL
export const API_URL = 'http://localhost:80';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuthenticated: false,
            user: null,
            userForum: null
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
        console.log(this);

        console.log(prevState);

        if (this.state.isAuthenticated && prevState.isAuthenticated !== this.state.isAuthenticated) {
            console.log('getuserforums');
            axios.get(`${API_URL}/user/user1`)
                .then(res => { this.setState({ userForum: res.data[0].forum }) })
                .catch(error => console.log(error));
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
                <SideNav userForum={this.state.userForum} isAuthenticated={this.state.isAuthenticated} />
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/forum/list" component={ForumList} />
                </Switch>
                <PrivateRoute path="/protected" component={Comment} />
            </BrowserRouter>
        );
    }
}