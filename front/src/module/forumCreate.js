import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ForumCreate extends Component {

    handleSubmit(event) {
        event.preventDefault();
        const name = event.target.name.value;
        const description = event.target.description.value;
        if (!name || !description) {
            alert("Please fill in a title and a description for the video.");
        } else {
            axios
                .post('', {
                    name: name,
                    description: description,
                })
                .then(response => {
                    alert("Video is published!");
                    this.setState({ publish: true });
                })
                .catch(error => console.log(error));
        }
    }
    componentDidMount() {
    }
    render() {
        return (
            <main className="forum-create">
                <h1>Create your own forum and foster a community!</h1>
                <form className="forum-create__form" onSubmit={this.handleSubmit}>

                    <div className="forum-create__text-input">
                        <label className='label' htmlFor="name">Name</label>
                        <input className='forum-create__text' type="text" id="name" placeholder="Name your forum" autoComplete="off" />
                        <label className='label' htmlFor="description">Describe the topic this forum will discuss.</label>
                        <textarea className='forum-create__textarea' id="description" type='texarea' placeholder="e.g. what did you eat yesterday?" />
                    </div>

                    <div className="forum-create__links">
                        <Link className="forum-create__cancel" to="/">Cancel</Link>
                        <button className="btn forum-create__btn" value="Submit">Create</button>

                    </div>
                </form>
            </main>
        );
    }
}
