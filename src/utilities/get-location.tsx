const options: object = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

export const getLocation: Function = (): any => (
  new Promise((resolve, reject) => {
    
    const geo: any = navigator.geolocation;

    const showLocation = async ({ coords }: any) => {
      resolve({
        lat: coords.latitude,
        lon: coords.longitude
      });
    }
    
    geo.getCurrentPosition(
      showLocation, (err: any) => reject(err), options
    );

  }
));