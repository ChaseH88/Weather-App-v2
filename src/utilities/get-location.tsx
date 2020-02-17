export const getLocation: Function = (): any => {
  return new Promise((resolve, reject) => {
    
    const geo: any = navigator.geolocation;

    let coordinates: object | null = null;

    const showLocation = async ({ coords }: any) => {
      resolve({
        lat: coords.latitude,
        lon: coords.longitude
      });
    }
    
    geo.getCurrentPosition(showLocation, (err: any) => reject(err), {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    });

    return coordinates;

  }); 
}