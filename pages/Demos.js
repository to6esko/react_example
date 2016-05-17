import React from 'react';
import ReactDOM from 'react-dom';
import ChatHeads from '../components/ChatHeads';
import SpringRotation from '../components/SpringRotation';

class Demos extends React.Component{
    render(){
        return(
            <div>
            <h1>Demos</h1>
            <br/>
            <ChatHeads/>
            <br/>
                <SpringRotation/>
            </div>    
        )
    }
}

export default Demos;