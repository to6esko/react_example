import React from 'react';
import CommentBox from '../components/CommentBox';

class Comments extends React.Component{
    render(){
        return(
            <div>
            <h1>Comments</h1>
            <hr/>
            <CommentBox url="http://localhost:3000/api/comments" pollInterval={2000}/>
            </div>
        );
    }
};

export default Comments;