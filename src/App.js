import './App.css';
import { useRef, useEffect, useState } from 'react';
import * as tt from '@tomtom-international/web-sdk-maps'

const App=() => {
  const mapElement = useRef()
  const [map,setMap] = useState({})
  const [longitude, setLongitude] = useState(36.817223)
  const [latitude, setLatitude] = useState(-1.286389)
  


  useEffect(() => {
    let map = tt.map({
      key: process.env.REACT_APP_TOM_TOM_API_KEY,
      container:mapElement.current,
      stylesVisibility:{
        trafficFlow:true,
        trafficIncidents:true
      },
      "basePath":"sdk",
      "source":"vector",
      // Adding the following two elements to 
      //set initial map location
      center: [longitude, latitude], 
      zoom: 13
  });
    setMap(map)
  }, [])
  return (
    <div className="App">
      <div ref={mapElement} className='map'></div>
    </div>
  );
}

export default App;
