import * as React from "react"
import ReactDOM from "react-dom/client";
import {LocationProvider} from "./src/contexts/LocationContext";
import { PrismicPreviewProvider } from "gatsby-plugin-prismic-previews"

export const wrapRootElement = ({ element }) => (
    <PrismicPreviewProvider initialEnabled>
      {element}
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

export const replaceHydrateFunction = () => {
  return (element, container) => {
    const root = ReactDOM.createRoot(container)
    root.render(element)
  }
}