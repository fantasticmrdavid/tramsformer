import React from "react";
import {LocationProvider} from "./src/contexts/LocationContext";
import { PrismicPreviewProvider } from 'gatsby-plugin-prismic-previews'

export const wrapRootElement = ({ element }) => (
  <PrismicPreviewProvider initialEnabled>
    <LocationProvider location={location}>
      {element}
    </LocationProvider>
  </PrismicPreviewProvider>
);

export const wrapPageElement = ({ element, props }) => {
  const Layout = element.type.Layout ?? React.Fragment
  const {location} = props
  return (
    <PrismicPreviewProvider initialEnabled>
      <LocationProvider location={location}>
        <Layout {...props}>{element}</Layout>
      </LocationProvider>
    </PrismicPreviewProvider>
  )
};