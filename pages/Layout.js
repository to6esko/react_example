import React from 'react';
import {Link} from 'react-router';
import Nav from '../components/layout/Nav';

class Layout extends React.Component {
    /*
    navigate() {
        console.log(this.props);
        this.props.history.pushState(null, '/');
    }
*/
    render() {
        //const {history} = this.props;
        //console.log(history.isActive("archives"));
        const {location} = this.props;
        const containerStyle = { marginTop: '10%' }; //"margin-top"
        return (
             /*
            <div>
                <div className='all btn'>
                    <Link to="archives">
                        <button activeClassName="test">archives</button>
                    </Link>
                    <Link to="settings">
                        <button className="btn btn-success">settings</button>
                    </Link>
                    <button onClick={this.navigate.bind(this) }>home</button>
                </div>
               */
                <div>
                      <Nav location={location}/>
                    <div className='container' style={containerStyle}>
                        <div className='row'>
                            <div className='col-lg-12'>
                            
                                {this.props.children}
                            </div>
                        </div>
                    </div>
                </div>
            //</div>
        );
    }
};

export default Layout;