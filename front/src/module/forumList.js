import React, { Component } from 'react';
import axios from 'axios';
import { API_URL } from '../App';
import { Link } from 'react-router-dom';

export default class ForumList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            forumList: null
        }
    }

    componentDidMount() {
        axios.get(`${API_URL}/forum/list`)
            .then(response => this.setState({ forumList: response.data }))
            .catch(error => console.log(error));
    }
    render() {
        return (
            <main className="forum-list">
                <h1>Forums</h1>
                <ul>
                    {this.state.forumList &&
                        this.state.forumList.map(item =>
                            <li className="forum-list__item">
                                <button className="forum-list__btn">Join</button>
                                <Link to={`/forum/${item.name}`}>
                                    <h3>{item.name}</h3>
                                    <p className="forum-list__item__description">{item.description}</p>
                                </Link>
                            </li>
                        )
                    }
                </ul>
            </main>
        );
    }
}
