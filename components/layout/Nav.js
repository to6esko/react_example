import React from 'react';
import {IndexLink, Link} from 'react-router';


class Nav extends React.Component {
    constructor() {
        super();
        this.state = {
            collapsed: true
        };
    }
    toggleCollapse() {
        const collapsed = !this.state.collapsed;
        this.setState({ collapsed });
    }

    render() {
        const {location} = this.props;
        const {collapsed} = this.state;
        const fearuredClassName = location.pathname === '/' ? 'active' : '';
        const archivesClassName = location.pathname.match(/^\/archives/) ? 'active' : '';
        const settingsClassName = location.pathname.match(/^\/settings/) ? 'active' : '';
        const navClassName = collapsed ? 'collapse' : '';
        
        return (
            <nav className='navbar navbar-inverse navbar-fixed-top' role='navigation'>
                <div className='container'>
                    <div className='navbar-header'>
                        <div className='navbar-toggle' onClick={this.toggleCollapse.bind(this) }>
                            <span className='icon-bar'></span>
                            <span className='icon-bar'></span>
                            <span className='icon-bar'></span>
                        </div>
                    </div>
                    <div className={'navbar-collapse' + navClassName} id='bs-example-navbar-collapse-1'>
                    <h1 className="name-title">Todor page</h1>
                        <ul className='nav navbar-nav'>
                            <li className={fearuredClassName}>
                                <IndexLink to='/' onClick={this.toggleCollapse.bind(this) }><h2 className='nav-navigation'>Featured</h2></IndexLink>
                            </li>
                            <li className={archivesClassName}>
                                <Link to='archives' onClick={this.toggleCollapse.bind(this) }><h2 className='nav-navigation'>Archives</h2></Link>
                            </li>
                            <li className={settingsClassName}>
                                <Link to='settings' onClick={this.toggleCollapse.bind(this) }><h2 className='nav-navigation'>Settings</h2></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
};


export default Nav;