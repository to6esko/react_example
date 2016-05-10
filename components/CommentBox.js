
"use strict";
import React from 'react';
import {render} from 'react-dom';
import $ from 'jquery';
import marked from 'marked';


class CommentBox extends React.Component {
    constructor() {
        super();
        this.state = { data: [] };
    }
    loadCommentsFromServer() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: (data) => {
                this.setState({ data: data });
            },

            error: (xhr, status, err) => {
                console.error(this.props.url, status, err.toString());
            }
        });
    }

    handleCommentSubmit(comment) {
        var comments = this.state.data;
        comment.id = Date.now();
        var newComments = comments.concat([comment]);
        this.setState({ data: newComments });
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            type: 'Post',
            data: comment,
            success: (data) => {
                this.setState({ data: data });
            },
            error: (xhr, status, err) => {
                console.error(this.props.url, status, err.toString());
            }
        });
    }

    componentDidMount() {
        this.loadCommentsFromServer();
        this.loadInterval = setInterval(this.loadCommentsFromServer.bind(this), this.props.pollInterval);
    }
    
    componentWillUnmount() {
        clearInterval(this.loadInterval);
    } 
    
    
    render() {

        return (
            <div className='commentBox'>
                <CommentList data={this.state.data}></CommentList>
                <CommentForm onCommentSubmit={this.handleCommentSubmit.bind(this) }/>
            </div>
        );
    }
};

class CommentList extends React.Component {
    constructor() {
        super();
        
        this.state = {data: []};
    }    
    
   deleteComment(id) {
        if (this.state.data.length == 0) {
            this.setState({
            data: this.props.data
            });
        }
       
        this.setState({
            data: this.state.data.filter((comment) => {
                return comment.id != id;
            })
        })
    }
    
    render() {
        let commentNodes = this.props.data.map((comment) => {
            return (
                <div key = { comment.id }>
                <Comment  author = { comment.author }   id={comment.id} avatar = {comment.avatar} >
                    { comment.text }
                </Comment>
                <button className="btn-delete" onClick={() => this.deleteComment(comment.id)}>Delete</button>
                </div>
            );
        });

        return (
            <div  className = "commentList" >
                { commentNodes }
            </div>
        );
    }

};



class CommentForm extends React.Component {
    constructor() {
        super();
        this.state = { author: '', text: '' };
    }

    handleSubmit(event) {
        event.preventDefault();
        var author = this.state.author.trim();
        var text = this.state.text.trim();

        if (!text || !author) {
            return;
        }
        this.props.onCommentSubmit({ author: author, text: text });
        this.setState({ author: '', text: '' });
    }

    handleAuthorChange(event) {
        this.setState({ author: event.target.value, text: this.state.text });
    }

    handleTextChange(event) {
        this.setState({ author: this.state.author,  text: event.target.value });
    }


    render() {
        return (

            <form className='commentForm' onSubmit={this.handleSubmit.bind(this) } >

                <input className='your-name' type='text' placeholder='Your name' value={this.state.author} onChange={this.handleAuthorChange.bind(this) }/>
                <textarea className='form-control' type='text' placeholder='Say something...' value={this.state.text} onChange={this.handleTextChange.bind(this) }/>
                <input className='btn-submit' type='submit' value='Post'/>

                <button className='btn-default'>Add Photo</button>
            </form>
        );
    }
};


class Comment extends React.Component {
    constructor() {
        super();
        this.state={
            id: 0,
            author: "",
            avatar: ""
        };
    }
    
    rawMarkup() {
        var rawMarkup = marked(this.props.children.toString(),
            { sanitize: true });
        return { __html: rawMarkup }
    }
    render() {
         
        return (
            <div className='comment'>
                <div className='commentAuthor'>
                    {this.props.author}
                </div>
                <img src={this.props.avatar} alt=''/>
                
                <span className='text-content' dangerouslySetInnerHTML={this.rawMarkup() }/>
            </div>
        );
    }
};

export default CommentBox;

