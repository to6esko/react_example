import React from 'react';


export default class extends React.Component {
    render() {
        const {title} = this.props;
        return (
            <div className='col-md-4'>
                <h2>{title}</h2>
                <p>Lorem ipdum dolar sit amet.</p>
                <a className='btn -btn-default' href="#">More info</a>
            </div>
        );
    }
};

