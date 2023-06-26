import * as React from "react";

export const LocationContext = React.createContext();

export const LocationProvider = ({location, children}) => {
  return <LocationContext.Provider value={location}>{children}</LocationContext.Provider>;
};
