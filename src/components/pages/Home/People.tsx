import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import noava from "../../../img/noava.png";

class People extends Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      issPeopleRedux: []
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps: any) {
    if (this.props !== nextProps) {
      this.setState({
        issPeopleRedux: nextProps.issPeopleRedux.people
      });
    }
  }

  render() {
    const { issPeopleRedux } = this.state;

    return (
      <div className="people">
        {issPeopleRedux.map((man: any, i: number) => {
          const { name, craft } = man;

          if (craft === "ISS") {
            return (
              <Fragment key={i}>
                <a
                  href={`https://en.wikipedia.org/wiki/${name}`}
                  target="blank"
                >
                  <div className="container flex-iss-man">
                    <div className="row">
                      <p className="col s3 iss-man-ava ">
                        <img src={noava} alt="" className="responsive-img" />
                      </p>
                      <p className="col s9 iss-man">{name}</p>
                    </div>
                  </div>
                </a>
              </Fragment>
            );
          } else {
            return false;
          }
        })}

        <hr className="mt30" />
        <p className="iss-man-count">
          Total amount: {issPeopleRedux.length} people on ISS
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    issPeopleRedux: state.getFetchData.issPeopleRedux
  };
};

export default connect(mapStateToProps)(People);
