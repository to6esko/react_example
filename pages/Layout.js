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
                <div>
                      <Nav location={location}/>
                    <div className='container' style={containerStyle}>
                        <div className='row'>
                            <div className='col-lg-12'>
                                {this.props.children}
                                <hr/>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
};

export default Layout;