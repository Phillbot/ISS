import React, { Component } from "react";

import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { getIssData } from "../../../functions/fetches";

import {
  getFetchDataActionIss,
  getFetchDataActionPeople
} from "../../../actions/getFetchDataAction";
import IssCoord from "./IssCoord";
import People from "./People";
import Timer from "./Timer";

import "./home.scss";

class Home extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      issNowError: null,
      issPeopleError: null,
      issNowIsLoaded: false,
      issPeopleIsLoaded: false,
      issNow: {},
      issPeople: {}
    };
  }

  componentDidMount() {
    const { getIssDataToDispatch, getPeopleDataToDispatch } = this.props;

    this.setState = this.setState.bind(this);

    getIssData(this.setState).then(() => {
      getIssDataToDispatch(this.state.issNow);
      getPeopleDataToDispatch(this.state.issPeople);
    });

    setInterval(() => {
      getIssData(this.setState).then(() => {
        getIssDataToDispatch(this.state.issNow);
        getPeopleDataToDispatch(this.state.issPeople);
      });
    }, 1000);
  }

  render() {
    const {
      issNowError,
      issPeopleError,
      issNowIsLoaded,
      issPeopleIsLoaded
    } = this.state;

    return (
      <div className="home container mt30">
        <Helmet>
          <title>ISS</title>
        </Helmet>

        <div className="row">
          <div className="col xl8 s12">
            {!issNowIsLoaded ? (
              <p>Загрузка координат</p>
            ) : !issNowError ? (
              <IssCoord />
            ) : (
              <p>Ошибка АПИ issNowError</p>
            )}
          </div>

          <div className="col xl4 s12">
            <Timer />

            {!issPeopleIsLoaded ? (
              <p>Загрузка космонавтов</p>
            ) : !issPeopleError ? (
              <People />
            ) : (
              <p>Ошибка АПИ issPeopleError</p>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Function) => {
  return {
    getIssDataToDispatch: (data: any) => {
      dispatch(getFetchDataActionIss(data));
    },
    getPeopleDataToDispatch: (data: any) => {
      dispatch(getFetchDataActionPeople(data));
    }
  };
};

export default connect(null, mapDispatchToProps)(Home);
