"use client";
import React from "react";
import { MapContainer, Marker, Popup, TileLayer, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import MapRouting from "./MapRouting";
// import Routing from './leafletRouting'

const LeafletMap = ({ el }) => {
  const locationLatLng = [25.33031, 82.99627];
  return (
    <MapContainer
      center={locationLatLng}
      zoom={13}
      scrollWheelZoom={true}
      style={{ height: "60vh" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">yugam</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={locationLatLng}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      {el && <MapRouting />}
    </MapContainer>
  );
};

export default LeafletMap;
