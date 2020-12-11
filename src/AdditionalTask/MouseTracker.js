 import React, { Component } from 'react'
import download from './download.jpg'
const styles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
}
class MouseTracker extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    //this.handleMouseEnter = this.handleMouseEnter.bind(this, this.props.handleMouseEnter)
    this.handleMouseMove = this.handleMouseMove.bind(this, this.props.handleMouseMove)
    this.handleMouseLeave = this.handleMouseLeave.bind(this, this.props.handleMouseLeave)
}
// handleMouseEnter(e) {
  // console.log('onMouseEnter', e.clientX, e.clientY)
// }
handleMouseMove(e){
  console.log('onMouseMove',e.nativeEvent.clientX, e.nativeEvent.e.clientY)
}
handleMouseLeave(e) {
  console.log('onMouseLeave', e.clientX, e.clientY)
}
  render() {
    return (
      <div style={styles}>
        <h1>Mouse over the photo:</h1>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
          }}
         // onMouseEnter={this.handleMouseEnter}
          onMouseMove={this.handleMouseMove}
          onMouseLeave={this.handleMouseLeave}
        >
          <img src={download} alt="" />
        </div>
      </div>
    )
  }
}
export default MouseTracker