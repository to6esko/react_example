import React from "react";

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
        this.setState({ author: this.state.author, text: event.target.value });
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


export default CommentForm;