
"use strict";
import React from 'react';
import {render} from 'react-dom';
import $ from 'jquery';
import marked from 'marked';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

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
        let comments = this.state.data;
        comment.id = Date.now();
        let newComments = comments.concat([comment]);
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
        //fix setInterval error 
        clearInterval(this.loadInterval);
    }

    

    render() {

        return (
            <div className='commentBox'>
                <CommentList data={this.state.data} onClick={() => deleteComment() }></CommentList>
                <CommentForm onCommentSubmit={this.handleCommentSubmit.bind(this) }/>
            </div>
        );
    }
};

export default CommentBox;

