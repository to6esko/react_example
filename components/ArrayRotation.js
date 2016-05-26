import React from 'react';
import { Motion, spring, presets} from '../react-motion-src/react-motion';


class ArrayRotation extends React.Component {
    constructor() {
        super();
        this.state = {
            items: [0, 1, 2, 3],
            currentCount: 3
        }
        
    }


    
        handleAdd = (key) => {
            let items = this.state.items;
            let currentCount = this.state.currentCount + 1;
            items.push(currentCount);
            this.setState({ items, currentCount });
        }
    
        handleRemove = (key) => {
            let items = this.state.items;
            let keyIndex = items.indexOf(+ key);
            if (keyIndex !== -1) {
                items.splice(keyIndex, 1);
                this.setState({ items });
            }
        }
    
    
        render() {
            return (
                <div>
                    <button className="btn btn-content" onClick={() => this.handleAdd() }>Add Box</button>
                    <hr/>
                    <div>
                        {this.state.items.map((key) => {
                            const sign = key % 2 === 0 ? 1 : -1;
                            return <Motion key={key} defaultStyle={{ rotate: 0, scale:0,opacity:1 }}
                                style={{ rotate: spring(sign * 360, presets.moble), scale:spring(1) }}>
                                {(obj) => {
                                    const {rotate,scale} = obj;
                                    let style = {
                                        transform: `rotate(${rotate}deg) scale(${scale})`
                                        
                                    }
                                    return <div style={style} onClick={this.handleRemove.bind(null, key) } className="blockContent"></div>
                                } }
                            </Motion>
                        }) }
                    </div>
                </div>
            )
        }
}

export default ArrayRotation;