import React from 'react';
import ReactDOM from 'react-dom';
import ChatHeads from '../components/ChatHeads';
import SpringRotation from '../components/SpringRotation';
import ArrayRotation from '../components/ArrayRotation';



class Demos extends React.Component {
    render() {
        return (
            <div>
                <h1>Demos</h1>
                <br/>
                <ChatHeads/>
                <br/>
                <SpringRotation/>
                <br/>
                <ArrayRotation/>
            </div>
        )
    }
}

export default Demos;