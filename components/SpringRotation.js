import React from 'react';
import { Motion, spring } from '../react-motion-src/react-motion';

let wrapperStyle = {
    borderRadius: 4,
    backgroundColor: '#ccc',
    position: 'relative',
    width: 650,
    height: 50
};

let blockStyle = {
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: 4,
    backgroundColor: 'yellow'
};

class SpringRotation extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
  open: false,
  stiffness: 120,
  damping: 17
  };
  }

  handleMouseDown = () => {
    this.setState({open: !this.state.open});
  }

  handleTouchStart=(e) => {
    e.preventDefault();
    this.handleMouseDown();
  }
  handleChange = (type, {target}) => {
  let state = this.state;
  state[type] = target.value;
  this.setState(state);
  }
  render() {

let {stiffness, damping} = this.state;

    return (
      <div>
        <button className="btn btn-spring"
          onMouseDown={()=>this.handleMouseDown()}
          onTouchStart={()=>this.handleTouchStart()}>
          Run animation
        </button>

        <Motion style={{x: spring(this.state.open ? 600 : 0, [stiffness, damping])}}>
          {({x}) =>
            // children is a callback which should accept the current value of
            // `style`
            <div style={wrapperStyle}>
              <div style={Object.assign({}, blockStyle, {
                WebkitTransform: `translate3d(${x}px, 0, 0)`,
                transform: `translate3d(${x}px, 0, 0)`,
              })} />
            </div>
          }
        </Motion>
        <p>Damping: {damping}</p>
        <input
                  type="range"
                  min={0}
                  max={40}
                  value={damping}
                  onChange={this.handleChange.bind(this, 'damping')} />
        
<p>Stiffness: {stiffness}</p>
        <input
                  type="range"
                  min={0}
                  max={300}
                  value={stiffness}
                  onChange={this.handleChange.bind(this, 'stiffness')} />
                
        
      </div>
    );
  }
}

export default SpringRotation;