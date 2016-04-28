import React from 'react';


export default class extends React.Component {
    render() {
        const {title} = this.props;
        return (
            <div className='col-md-4'>
                <h2>{title}</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum facere rerum, culpa. Ipsa impedit aliquam consequatur, omnis error veritatis sed itaque numquam a sunt unde cumque facilis distinctio quae! Commodi.</p>
                <a className='btn -btn-default' href="#">More info</a>
            </div>
        );
    }
};

