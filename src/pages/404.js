import React from "react";
import {
  withPrismicUnpublishedPreview,
  componentResolverFromMap,
} from "gatsby-plugin-prismic-previews";
import { Post } from "../components/Post";
import Homepage from "./homepage";

const Page404 = () => (
  <div className="not-found">
    <h1>404</h1>
    <h3>The page you are looking for was not found</h3>
    <p>
      <a href="/">
        <button type="button">Return to homepage</button>
      </a>
    </p>
  </div>
);

export default withPrismicUnpublishedPreview(Page404, [
  {
    componentResolver: componentResolverFromMap({
      post: Post,
      homepage: Homepage,
      prismicPost: Post,
      prismicHomepage: Homepage,
    }),
  },
]);
