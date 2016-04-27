import React from 'react';


class Archives extends React.Component{
    render(){
        const{query}=this.props.location;
        const {params} = this.props;
        const {article} = params;
        const {date}=query;
        const {filter}=query;
        return(
            <div>
            <h1>Archives({article})</h1>
            <h4>article:{article},date:{date},filter:{filter}</h4>
            </div>
        );
    }
};

export default Archives;