import * as React from "react"
import {LocationProvider} from "./src/contexts/LocationContext";
import { PrismicPreviewProvider } from "gatsby-plugin-prismic-previews"

export const wrapRootElement = ({ element }) => (
    <PrismicPreviewProvider initialEnabled>
      {element}
    </PrismicPreviewProvider>
);

export const wrapPageElement = ({ element, props }) => {
  const {location} = props
    const Layout = element.type.Layout ?? React.Fragment
    return (
      <PrismicPreviewProvider initialEnabled>
        <LocationProvider location={location}>
            <Layout {...props}>{element}</Layout>
        </LocationProvider>
        </PrismicPreviewProvider>
    )
};