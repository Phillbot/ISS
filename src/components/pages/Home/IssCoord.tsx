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
      issNowRedux: {},
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps: any) {
    if (this.props !== nextProps) {
      const upd = async () => {
        this.setState({
          issNowRedux: nextProps.issNowRedux.iss_position
        });
      };

      upd().then(() => {
        const { latitude, longitude } = this.state.issNowRedux;

        this.CMap = withScriptjs(
          withGoogleMap((props: any) => (
            <GoogleMap
              defaultZoom={5}
              defaultCenter={{
                lat: parseFloat(latitude),
                lng: parseFloat(longitude)
              }}
            >
              <Marker
                position={{
                  lat: parseFloat(latitude),
                  lng: parseFloat(longitude)
                }}
                icon={{
                  url: iss,
                  scaledSize: new google.maps.Size(100, 100)
                }}
                title={`ISS`}
              />
            </GoogleMap>
          ))
        );
      });
    }
  }

  CMap = withScriptjs(
    withGoogleMap((props: any) => (
      <GoogleMap
        defaultZoom={5}
        defaultCenter={{
          lat: parseFloat(this.state.issNowRedux.latitude),
          lng: parseFloat(this.state.issNowRedux.longitude)
        }}
      >
        <Marker
          position={{
            lat: parseFloat(this.state.issNowRedux.latitude),
            lng: parseFloat(this.state.issNowRedux.longitude)
          }}
          icon={{
            url: iss,
            scaledSize: new google.maps.Size(100, 100)
          }}
          title={`ISS`}
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
