import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class SideNav extends Component {
    render() {
        return (
            <nav className="side-nav">
                <Link to="/forum/list">Browse forums</Link>
                <Link to="/forum/create">+ create a forum</Link>
                {this.props.isAuthenticated &&
                    <dl className="side-nav__my-forums">
                        <dt>My forums</dt>
                        {this.props.userForum &&
                            this.props.userForum.map(item => <Link to={`/forum/${item}`}>{item}</Link>)}
                    </dl>
                }
                <dl>
                    <dt>Messages</dt>
                    <dd>Admin</dd>
                    <dd>Activity Feed</dd>
                    <dd>userxyz</dd>
                    <dd>+ message another user</dd>
                </dl>
            </nav>
        );
    }
}