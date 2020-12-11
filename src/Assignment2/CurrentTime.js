


import React,{Component} from 'react'
class CurrentTime extends Component{



    state={
        curTime : new Date().toLocaleString(),
      }
      render(){
        return (
          <div className="App">
            <p>Current Time : {this.state.curTime}</p>
          </div>
        );
      }
    }
    

export default CurrentTime