import { useState } from "react";

export function useCurrentLocation() {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

 function geoLocation(position) {
  setLatitude(position.coords.latitude)
  setLongitude(position.coords.longitude)
 }
 function error() {
  console.error("Spiacente, posizione non trovata")
 }

 const options = {
  enableHighAccuracy: true,
  maximumAge: 30000,
  timeout: false,
 }
 const watchID = navigator.geolocation.watchPosition(geoLocation, error, options);

  return[latitude, longitude]
}