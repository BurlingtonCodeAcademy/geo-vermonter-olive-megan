import React from "react";
import { useEffect} from "react";


//GeoData is sourcing specific location details from nominatim.
export default function GeoData(props) {

  //new x and new y are our new generated random location
  //we then fetch the info and set it to setLocation. we assign the county.
  //city is either the town, city, or village. all one variable "city"
  useEffect(() => {
    if (props.location.county === "" && props.start === true) {
      let newX = props.droppedPin[0];
      let newY = props.droppedPin[1];
      fetch(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${newX}&lon=${newY}`
      )
        .then((res) => res.json())
        .then((jsonObj) => {
          if (jsonObj.address.town) {
           props.setLocation({
              county: jsonObj.address.county,
              city: jsonObj.address.town,
            })
          } else if (jsonObj.address.city) {
            props.setLocation({
              county: jsonObj.address.county,
              city: jsonObj.address.city,
            });
          } else if (jsonObj.address.village) {
            props.setLocation({
              county: jsonObj.address.county,
              city: jsonObj.address.village,
            });
          }
        });
    }
  });
  
  //Panel is our information of lat/long/location. this is child of geodata, we are also passes thru the i give up function
  return <div></div>;
}
