//Manual
import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { geolocated } from "react-geolocated";

function MapView() {
	const [currentLocation] = useState({
		lat: -7.33194, //52.52437,
		lng: 110.49278, //13.41053,
	});
	const [zoom] = useState(17);
	return (
		<MapContainer center={currentLocation} zoom={zoom}>
			<TileLayer
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
			/>
			<Marker position={currentLocation}>
				<Popup>You are here!</Popup>
			</Marker>
		</MapContainer>
	);
}

// export default MapView;
export default geolocated({
	positionOptions: {
		enableHighAccuracy: false,
	},
	userDecisionTimeout: 5000,
})(MapView);
