import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";

class Timer extends Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      time: moment.utc().format("HH:mm:ss"),
      date: moment.utc().format("dddd, DD MMM YYYY")
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        time: moment.utc().format("HH:mm:ss"),
        date: moment.utc().format("dddd, DD MMM YYYY")
      });
    }, 1000);
  }

  render() {
    const { date, time } = this.state;

    return (
      <div className="timer mb30">
        <p className="strong-text">Current UTC time: {time}</p>
        <p>{date}</p>
      </div>
    );
  }
}

export default connect()(Timer);
