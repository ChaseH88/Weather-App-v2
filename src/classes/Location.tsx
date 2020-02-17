class Location {
  
  static coordinates: {};

  get: Function = () => {
    
    const geo = navigator.geolocation;
    
    const showLocation = ({ coords }: any) => {
      return {
        lat: coords.latitude,
        lon: coords.longitude
      }
    }
    
    return geo.getCurrentPosition(showLocation, (err) => null, {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    });
    
  }

}

export default Location;