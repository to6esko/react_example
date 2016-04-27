import React from 'react';
import {Link} from 'react-router';

class Layout extends React.Component {
    navigate() {
        console.log(this.props);
        this.props.history.pushState(null, '/');
    }
    render() {
        const {history} = this.props;
        //console.log(history.isActive("archives"));
        return (
            <div>
                <h1>KillerNews.net</h1>
                {this.props.children}
                <Link to="archives">
                    <button activeClassName="test">archives</button>
                </Link>
                <Link to="settings">
                    <button className="btn btn-success">settings</button>
                </Link>
                <button onClick={this.navigate.bind(this) }>featured</button>
            </div>
        );
    }
};

export default Layout;