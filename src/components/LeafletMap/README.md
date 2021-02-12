//Manual
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { geolocated } from "react-geolocated";

const default_lng = -7.33194; //52.52437; // //

const default_lat = 110.49278; //13.41053; // //

class MapView extends React.Component {
	render() {
		const longitude = this.props.coords
			? this.props.coords.longitude
			: default_lng;
		const latitude = this.props.coords
			? this.props.coords.latitude
			: default_lat;
		return (
			<MapContainer center={[longitude, latitude]} zoom={17}>
				<TileLayer
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
				/>
				{!this.props.coords ? (
					<div className="loading">Loading</div>
				) : (
					<Marker position={[longitude, latitude]}>
						<Popup>You are here!</Popup>
					</Marker>
				)}
			</MapContainer>
		);
	}
}

// export default MapView;
export default geolocated({
	positionOptions: {
		enableHighAccuracy: false,
	},
	userDecisionTimeout: 5000,
})(MapView);
