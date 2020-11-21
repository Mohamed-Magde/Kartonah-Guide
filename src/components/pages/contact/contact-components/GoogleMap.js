import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div
        className="container"
        style={{
          height: "60vh",

          marginTop: "5em",
          marginBottom: "5em",
        }}
      >
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBruBw3aSGhaKT47myDUGs-Vkf1Pqreczs" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;
