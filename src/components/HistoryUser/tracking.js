import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useSelector, useDispatch } from "react-redux";
import mapIcon from "../../assets/img/button/iconmaps1.png";
import L from "leaflet";
import { getTracking } from "../../redux/Action/contentAction";

const Tracking = () => {
  const dispatch = useDispatch();
  const tracking = useSelector((state) => state.content.tracking);

  useEffect(() => {
    dispatch(getTracking());
  }, []);

  const startPoint = [3.595196, 98.672226];
  const endPoint = [3.596277, 98.667656];

  console.log("tracking =>", tracking);
  return (
    <>
      <MapContainer center={startPoint} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={startPoint}>
          <Popup>Start Point</Popup>
        </Marker>
        <Marker position={endPoint}>
          <Popup>End Point</Popup>
        </Marker>
      </MapContainer>

      <div className="history-tracking-data"></div>
    </>
  );
};

export default Tracking;
