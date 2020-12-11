
import React,{Component} from 'react'
class DigitalClock extends Component{



constructor(props) {
    super(props);
    var currentTime = function () {
        return new Date().toLocaleTimeString();
    }
    this.state= {
        time: setInterval(currentTime(), 1000)
    }
}
}
export default DigitalClock