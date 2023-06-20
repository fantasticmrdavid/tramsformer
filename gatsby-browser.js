import * as React from "react"
import { PrismicPreviewProvider } from "gatsby-plugin-prismic-previews"

export const wrapRootElement = ({ element }) => (
    <PrismicPreviewProvider initialEnabled>{element}</PrismicPreviewProvider>
);

export const wrapPageElement = ({ element, props }) => {
    const Layout = element.type.Layout ?? React.Fragment
    return <PrismicPreviewProvider initialEnabled><Layout {...props}>{element}</Layout></PrismicPreviewProvider>
};