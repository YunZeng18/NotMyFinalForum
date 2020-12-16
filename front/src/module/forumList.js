import React, { Component } from 'react';
import axios from 'axios';
import { API_URL } from '../App';

export default class ForumList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            forumList: null
        }
    }

    componentDidMount() {
        axios.get(`${API_URL}/forum/list`);
    }
    render() {
        return (
            <main className="forum-list">
                <h1>List of all forums</h1>
                <ul>
                    <li>test 1</li>
                </ul>
            </main>
        );
    }
}
