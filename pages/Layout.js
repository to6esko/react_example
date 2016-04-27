import React from 'react';
import {Link} from 'react-router';

class Layout extends React.Component{
    
    navigate(){
        this.props.hishtory.pushState(null,'/');
    }
    render(){
        return(
            <div>
            <h1>KillerNews.net</h1>
            {this.props.children}
            <Link to="archives">
            <button class="btn btn-danger">archives</button>
            </Link>
            <Link to="settings">
            <button class="btn btn-success">settings</button>
            </Link>
            <button onClick={this.navigate.bind(this)}>featured</button>
            </div>
        );
    }
};

export default Layout;