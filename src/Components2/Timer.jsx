import React, { Component } from 'react'

import TimerMachine from 'react-timer-machine'

import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";

momentDurationFormatSetup(moment);


export default class Timer extends Component {
    constructor(props) {
        super(props);
            this.state = {
          paused: false,
          started: false
        }
      }

      togglePaused() {
        this.setState({
          paused: !this.state.paused
        })
      }

  render () {
    return (
        <div>
        <button onClick={()=> this.setState({started: true})}>Start Break</button>
        <button onClick={()=> this.togglePaused()}>Pause</button>

      <TimerMachine
        timeStart={300 * 1000} // start at 5 mins
        timeEnd={0 * 1000} // end at 0
        started={this.state.started}
        paused={this.state.paused}
        countdown={true} // use as countdown
        interval={1000} // tick every 1 second
        formatTimer={(time, ms) =>
          moment.duration(ms, "milliseconds").format("h:mm:ss")
        }
        onStart={time =>
          console.info(`Timer started: ${JSON.stringify(time)}`)
        }
        onStop={time =>
          console.info(`Timer stopped: ${JSON.stringify(time)}`)
        }
        onTick={time =>
          console.info(`Timer ticked: ${JSON.stringify(time)}`)
        }
        onPause={time =>
          console.info(`Timer paused: ${JSON.stringify(time)}`)
        }
        onResume={time =>
          console.info(`Timer resumed: ${JSON.stringify(time)}`)
        }
        onComplete={time =>
          alert("Break finished")
        }
    />
    
    </div>
    )
  }
}