import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";
import BarPattern from "components/BarPattern";
import content from "./data";
import {
  Container,
  Content,
  Header,
  PatternContainer,
  TechStack,
} from "./styles";

export default ({ siteMetadata }) => (
  <Container>
    <Helmet>
      <title>{`About | ${siteMetadata.title}`}</title>
    </Helmet>
    <Content>
      <Header className="container post-header">
        <h1>{"> About"}</h1>
      </Header>
      <div>
        {content.aboutMain}
      </div>
      <PatternContainer>
        <BarPattern direction="left" height={30} count={16} />
      </PatternContainer>
      <div>
        This website was built with the following:
      </div>
      <TechStack>
        <div>
          <h3>Architecture</h3>
          <ul>
            <li>Gatsby</li>
            <li>Prismic</li>
            <li>React</li>
            <li>Styled-Components</li>
          </ul>
        </div>
        <div>
          <h3>Deployment</h3>
          <li>Github</li>
          <li>Codeship</li>
          <li>AWS</li>
        </div>
      </TechStack>
      <div>
        <Link href="https://github.com/fantasticmrdavid/tramsformer" target="_blank">{"> Visit the Github repository"}</Link>
      </div>
    </Content>
  </Container>
);
