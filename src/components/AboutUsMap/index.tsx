import { Grid } from "@chakra-ui/react";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

const MyIcon = new L.Icon({
  iconUrl: "/map-pointer.png",
  iconAnchor: [5, 55],
  popupAnchor: [10, -44],
  iconSize: [55, 55],
});

export const AboutUsMap = () => {
  return (
    <Grid minH="500px">
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]} icon={MyIcon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </Grid>
  );
};
