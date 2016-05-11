import React from "react";

class CommentForm extends React.Component {
    constructor() {
        super();
        this.state = { author: '', text: '' };
    }

    handleSubmit(event) {
        event.preventDefault();
        let author = this.state.author.trim();
        let text = this.state.text.trim();
        let avatar=this.state.avatar;
        if (!text || !author) {
            return;
        }
        this.props.onCommentSubmit({ author: author, text: text, avatar: avatar });
        this.setState({ author: '', text: '' });
    }

    handleAuthorChange(event) {
        this.setState({ author: event.target.value, text: this.state.text });
    }

    handleTextChange(event) {
        this.setState({ author: this.state.author, text: event.target.value });
    }

    handleFile(event){
        let filename = event.target.value;
        
        filename = filename.substring(filename.lastIndexOf('\\') + 1);
        console.log(filename);
        this.setState({
             author: this.state.author, 
             text: this.state.text, 
             avatar: filename
        });
    }
    
    render() {
        return (
            <form className='commentForm' onSubmit={this.handleSubmit.bind(this) } >

                <input className='your-name' type='text' placeholder='Your name' value={this.state.author} onChange={this.handleAuthorChange.bind(this) }/>
                <textarea className='form-control' type='text' placeholder='Say something...' value={this.state.text} onChange={this.handleTextChange.bind(this) }/>
                <input className='btn-default' type='file' onChange={this.handleFile.bind(this)} />
                <input className='btn-submit' type='submit' value='Post'/>
            </form>
        );
    }
};


export default CommentForm;