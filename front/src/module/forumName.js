import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { API_URL } from '../App';
import timeDisplay from './helper/timeFormat';
export default class ForumName extends Component {
    state = {
        forum: {}
    }
    componentDidUpdate(prevProps, prevState) {
        const { params } = this.props.match;

        if (params.name && prevState.forum.name !== params.name) {
            this.getForum(params.name);

        }
    }
    componentDidMount() {
        this.getForum(this.props.match.params.name);
    }
    getForum(name) {
        axios.get(`${API_URL}/forum/${name}`)
            .then(response => this.setState({ forum: response.data[0] }))
            .catch(error => console.log(error));
    }
    handleClick = (e) => {
        //add a render: true to render comments in a using the index of the post 
        //https://stackoverflow.com/questions/29537299/react-how-to-update-state-item1-in-state-using-setstate

        let posts = [...this.state.forum.post];

        //the first time it runs will create a new rednerCommet attribute and flip the undefined attribute to true with !
        //afterwards it will just flip the boolean with !
        let post = { ...posts[e.target.value], renderComment: !this.state.forum.post[e.target.value].renderComment };

        posts[e.target.value] = post;

        //https://www.codegrepper.com/code-examples/delphi/how+to+update+a+single+attribute+in+object+in+setstate+in+react
        this.setState(prevState => (
            {
                forum: {
                    ...prevState.forum,
                    post: posts
                }
            }));
        console.log(this.state.forum.post);
    }
    render() {
        const { forum } = this.state;
        const post = this.state.forum.post;
        if (forum) {
            return (
                <main className="forum-name">
                    <h1>{forum.name}</h1>
                    <p className="forum-name__details">Created by {forum.owner} on {timeDisplay(forum.timestamp)} </p>
                    <p className="forum-name__details">Moderators:
                        {forum.moderator && forum.moderator.map(item => <span className="forum-name__details--moderator">{item}</span>)} <button className="btn">Become a Mod!</button></p>
                    <p className="forum-name__description">{forum.description}</p>
                    <form>
                        <div className="forum-name__text-input">
                            <label className='label' htmlFor="name">Title</label>
                            <input className='forum-name__text' type="text" id="name" placeholder="Relevant to the forum" autoComplete="off" />
                            <label className='label' htmlFor="description">content</label>
                            <textarea className='forum-name__textarea' id="description" type='texarea' placeholder="Elaborate on the topic" />
                            <button className="forum-name__btn" value="Submit">Post</button>
                        </div>
                    </form>
                    <section>
                        {post && post.map((item, index) =>
                            <div className="forum-name__post">
                                <h2>{item.title}</h2>
                                <p>Posted by <span className="forum-name__post__author">{item.author}</span> {timeDisplay(forum.timestamp)}</p>

                                <button className="forum-name__post__btn--comment" onClick={this.handleClick} value={index}>{item.comment.length} Comments</button>
                                {this.state.forum.post[index].renderComment &&
                                    <form className="forum-name__post__comment">
                                        <textarea className='forum-name__post__comment__textarea' type='texarea' placeholder="respect others!" />
                                        <button className="forum-name__post__comment__btn" value="Submit">Enter</button>
                                    </form>
                                }
                                {this.state.forum.post[index].renderComment &&
                                    this.state.forum.post[index].comment.map(item => <p>{item.author} said: "{item.content}" {timeDisplay(item.timestamp)}</p>)}
                            </div>
                        )}

                    </section>
                </main>
            );
        } else { return <main className="forum-name">Loading...</main>; }
    }
}
