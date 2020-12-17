import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
export default class SideNav extends Component {
    render() {
        return (
            <nav className="side-nav">
                <NavLink className="side-nav__link" activeClassName="side-nav__link--active" to="/forum/list">Browse forums</NavLink>
                <NavLink className="side-nav__link" activeClassName="side-nav__link--active" to="/forum/create">Create a forum +</NavLink>
                <h2 className="side-nav__heading">My forums </h2>
                {this.props.isAuthenticated &&
                    <ul className="side-nav__group">
                        {this.props.userForum &&
                            this.props.userForum.map(item => <li ><NavLink className="side-nav__link" activeClassName="side-nav__link--active" to={`/forum/${item}`}>{item}</NavLink></li>)}
                    </ul>
                }
                <h2 className="side-nav__heading">Messages</h2>
                <ul className="side-nav__group">
                    <li><NavLink className="side-nav__link" activeClassName="side-nav__link--active" to={`/message/admin`}>Admin</NavLink></li>
                    <li><NavLink className="side-nav__link" activeClassName="side-nav__link--active" to={`/message/activity`}>Activity Feed</NavLink></li>

                    <li><NavLink className="side-nav__link" activeClassName="side-nav__link--active" to={'/message/create'}>Compose message +</NavLink></li>
                </ul>
            </nav>
        );
    }
}