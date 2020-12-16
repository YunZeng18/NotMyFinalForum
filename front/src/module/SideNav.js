import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class SideNav extends Component {
    render() {
        return (
            <nav className="side-nav">
                <Link to="/forum/list">Browse forums</Link>
                <Link to="/forum/create">Create a forum +</Link>
                <h2 className="side-nav__heading">My forums </h2>
                {this.props.isAuthenticated &&
                    <ul className="side-nav__my-forums">
                        {this.props.userForum &&
                            this.props.userForum.map(item => <li className="side-nav__link"><Link to={`/forum/${item}`}>{item}</Link></li>)}
                    </ul>
                }
                <h2 className="side-nav__heading">Messages +</h2>
                <ul>
                    <li className="side-nav__link">Admin</li>
                    <li className="side-nav__link">Activity Feed</li>
                    <li className="side-nav__link">user2</li>
                    <li className="side-nav__link">message another user +</li>
                </ul>
            </nav>
        );
    }
}