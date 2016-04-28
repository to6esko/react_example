import React from 'react';
import CommentBox from '../components/CommentBox';

class Comments extends React.Component{
    render(){
        return(
            <div>
            <h1>Comments</h1>
            <hr/>
            <CommentBox/>
            </div>
        );
    }
};

export default Comments;