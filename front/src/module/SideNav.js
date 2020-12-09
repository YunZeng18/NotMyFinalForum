import React, { Component } from 'react';

export default class SideNav extends Component {
    render() {
        return (
            <nav className="side-nav">
                <dl>
                    <dt>Forums owned</dt>
                    <dd>my first forum</dd>
                    <dd>+ create a forum</dd>
                </dl>
                <dl>
                    <dt>Forums joined </dt>
                    <dd>abc modded</dd>
                    <dd>xyz modded</dd>
                    <dd>asdf</dd>
                    <dd>+ join a forum</dd>
                </dl>
                <dl>
                    <dt>Messages</dt>
                    <dd>Not My Final Forum Support/Admin</dd>
                    <dd>userxyz</dd>
                </dl>
            </nav>
        );
    }
}