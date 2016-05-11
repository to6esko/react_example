import React from "react";
import CommentForm from './CommentForm';
import marked from 'marked';


class Comment extends React.Component {
    constructor() {
        super();
        this.state = {
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


export default Comment;