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
        const homeClassName = location.pathname === '/' ? 'active' : '';
        const todoListClassName = location.pathname.match(/^\/todoList/) ? 'active' : '';
        const demosClassName = location.pathname.match(/^\/demos/) ? 'active' : '';
        const archivesClassName = location.pathname.match(/^\/archives/) ? 'active' : '';
        const commentsClassName = location.pathname.match(/^\/comments/) ? 'active' : '';
        const navClassName = collapsed ? 'collapse' : '';

        return (
            <nav className='navbar navbar-inverse navbar-fixed-top' role='navigation'>
                <div className='container'>
                    <div className='navbar-header'>
                        <div className='navbar-toggle' onClick={()=>this.toggleCollapse() }>
                            <span className='icon-bar'></span>
                            <span className='icon-bar'></span>
                            <span className='icon-bar'></span>
                            <span className='icon-bar'></span>
                            <span className='icon-bar'></span>
                        </div>
                    </div>
                    <div className={'navbar-collapse' + navClassName} id='bs-example-navbar-collapse-1'>
                        <h1 className="name-title">Todor page</h1>
                        <ul className='nav navbar-nav'>
                            <li className={homeClassName}>
                                <IndexLink to='/' onClick={()=>this.toggleCollapse() }><h2 className='nav-navigation'>Home</h2></IndexLink>
                            </li>
                            <li className={todoListClassName}>
                                <Link to='todoList' onClick={()=>this.toggleCollapse() }><h2 className='nav-navigation'>TODO List</h2></Link>
                            </li>
                            <li className={demosClassName}>
                                <Link to='demos' onClick={()=>this.toggleCollapse() }><h2 className='nav-navigation'>Demos</h2></Link>
                            </li>
                            <li className={archivesClassName}>
                                <Link to='archives' onClick={()=>this.toggleCollapse() }><h2 className='nav-navigation'>Archives</h2></Link>
                            </li>
                            <li className={commentsClassName}>
                                <Link to='comments' onClick={()=>this.toggleCollapse() }><h2 className='nav-navigation'>Comments</h2></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
};


export default Nav;