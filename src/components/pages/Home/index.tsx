import React, { Component } from "react";

import { Helmet } from "react-helmet";

import testChangerAtction from "../../../actions/testChangerAtction";
import { connect } from "react-redux";

class Home extends Component<any, any> {
  render() {
    return (
      <div className="home container">
        <Helmet>
          <title> Project name - Домашняя страничка</title>
        </Helmet>
        <div className="hello">{this.props.test}</div>

        <button
          onClick={() =>
            this.props.funcFromDispath(
              this.props.test === "Hello" ? "Hello World!" : "Hello"
            )
          }
        >
          Redux IT!
        </button>
      </div>
    );
  }
}

const mapStateToPRops = (state: any) => {
  return {
    test: state.testReducer.test
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    funcFromDispath: (test: any) => {
      dispatch(testChangerAtction(test));
    }
  };
};

export default connect(
  mapStateToPRops,
  mapDispatchToProps
)(Home);
