import React from 'react';
import {Motion, spring} from '../react-motion-src/react-motion';
import presets from '../react-motion-src/presets';
<link rel="stylesheet" href="./style/wellcome.css" />

class Welcome extends React.Component{
    render(){
        return(
            <Motion 
      defaultStyle={{y: 1000,x:100,z:10}} 
      style={{y: spring(180,presets.moble),x:spring(180),z:spring(2,presets.moble)}}>
      {(obj) =>{
          const {y,x,z}=obj;
          let style={
              WebkitTransform: `translate3d(${x}px, ${y}px,0) scale(${z}) `,
                  transform: `translate3d(${x}px, ${y}px,0) scale(${z}) `
          }
          return (
              <div style={style} className='block'>
                  <h1 className={"welcome"}>Welcome to Todor's page</h1>
              </div>
          )
      }}
      </Motion>
        )
    }
}

export default Welcome;