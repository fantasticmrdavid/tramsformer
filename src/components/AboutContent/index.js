import React from "react";
import { Helmet } from "react-helmet";
import BarPattern from "components/BarPattern";
import TerminalText from "components/TerminalText";
import Loadable from "@loadable/component";
import content from "./data";
import {
  Background,
  Gradient,
  Container,
  Contact,
  Content,
  EmailAddress,
  Header,
  PatternContainer,
  TechStack,
} from "./styles";

export default ({ siteMetadata }) => {
  const Trianglify = Loadable(() => import("@planningcenter/react-trianglify"));
  return (
    <Container>
      <Helmet>
        <title>{`About | ${siteMetadata.title}`}</title>
      </Helmet>
      <Background>
        <Trianglify
          width={2000}
          height={250}
          variance={1}
          strokeWidth={1}
          fill={false}
          xColors={["#000"]}
          yColors={["#000"]}
        />
        <Gradient />
      </Background>
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
            <li>AWS</li>
          </div>
        </TechStack>
        <div>
          <a
            href="https://github.com/fantasticmrdavid/tramsformer"
            target="_blank"
            rel="noreferrer"
          >
            {"> Visit the Github repository"}
          </a>
        </div>
        <Contact>
          {"Want to get in touch? Hit me up at: "}
          <EmailAddress><TerminalText>fantasticmrdavid@gmail.com</TerminalText></EmailAddress>
        </Contact>
      </Content>
    </Container>
  );
};
