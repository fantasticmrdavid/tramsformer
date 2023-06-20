import React from "react";
import { PrismicPreviewProvider } from 'gatsby-plugin-prismic-previews'
import { Helmet } from "react-helmet";

export const onRenderBody = (
  { setHeadComponents, setHtmlAttributes, setBodyAttributes },
  pluginOptions
) => {
  const helmet = Helmet.renderStatic()
  setHtmlAttributes(helmet.htmlAttributes.toComponent())
  setBodyAttributes(helmet.bodyAttributes.toComponent())
  setHeadComponents([
    helmet.title.toComponent(),
    helmet.link.toComponent(),
    helmet.meta.toComponent(),
    helmet.noscript.toComponent(),
    helmet.script.toComponent(),
    helmet.style.toComponent(),
  ])
}

export const onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
  const headComponents = getHeadComponents()

  headComponents.sort((x, y) => {
    if (x.props && x.props["data-react-helmet"]) {
      return -1
    } else if (y.props && y.props["data-react-helmet"]) {
      return 1
    }
    return 0
  })

  replaceHeadComponents(headComponents)
}

export const wrapRootElement = ({ element }) => (
  <PrismicPreviewProvider initialEnabled>{element}</PrismicPreviewProvider>
);

export const wrapPageElement = ({ element, props }) => {
  const Layout = element.type.Layout ?? React.Fragment
  return <PrismicPreviewProvider initialEnabled><Layout {...props}>{element}</Layout></PrismicPreviewProvider>
};