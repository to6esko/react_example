import React from 'react';
import Comment from './Comment';




class CommentList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: props.data
        };
    }


deleteComment(id) {
        $.noConflict();
        (function ($) {
            function readyFn() {
                this.setState({
                    data: this.state.data.filter((comment) => {
                        return comment.id != id;
                    })
                })
            }

            $(document).ready(readyFn);
        })($);
    }

    render() {
        let commentNodes = this.props.data.map((comment) => {
            return (
                <div key = { comment.id }>
                    <Comment  author = { comment.author }   id={comment.id} avatar = {comment.avatar} >
                        { comment.text }
                    </Comment>
                    <button className="btn-delete" onClick={() => this.deleteComment(comment.id) }>Delete</button>
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

export default CommentList;