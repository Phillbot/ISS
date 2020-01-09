import React, { Component } from "react";
import { connect } from "react-redux";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

import { googleMapLink } from "../../../api/index";
import iss from "../../../img/iss.png";

class IssCoord extends Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      issNowRedux: {}
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps: any) {
    if (this.props !== nextProps) {
      this.setState({
        issNowRedux: nextProps.issNowRedux.iss_position
      });
    }
  }

  CMap = withScriptjs(
    withGoogleMap((props: any) => (
      <GoogleMap
        defaultZoom={1.1}
        defaultCenter={{
          lat: 16.24,
          lng: 16.24
        }}
      >
        <Marker
          position={{
            lat: parseFloat(this.state.issNowRedux.latitude),
            lng: parseFloat(this.state.issNowRedux.longitude)
          }}
          icon={{
            url: iss,
            scaledSize: new google.maps.Size(48, 48)
          }}
          title={`ISS now: latitude:${this.state.issNowRedux.latitude}, longitude:${this.state.issNowRedux.longitude}`}
        />
      </GoogleMap>
    ))
  );

  render() {
    const {
      issNowRedux: { latitude, longitude }
    } = this.state;

    return (
      <div className="iss">
        {!isNaN(latitude) && !isNaN(longitude) ? (
          <>
            <div className="iss-coord mb30">
              <p className="strong-text">ISS is now located at:</p>
              <p className="italic-text">
                longitude: {longitude} latitude: {latitude}
              </p>
            </div>

            <this.CMap
              googleMapURL={googleMapLink}
              loadingElement={
                <div style={{ height: `500px`, marginBottom: "20px" }} />
              }
              containerElement={
                <div style={{ height: `500px`, marginBottom: "20px" }} />
              }
              mapElement={<div style={{ height: `100%` }} />}
            ></this.CMap>
          </>
        ) : (
          ""
        )}
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    issNowRedux: state.getFetchData.issNowRedux
  };
};

export default connect(mapStateToProps)(IssCoord);
