import React from "react";
import styled from "styled-components";

const TechStackDiv = styled.div`
  width: 100%;
  height: 160vh;
  background-color: #fefbf8;
  color: #1a1a1a;
  padding: 5%;
  @media (max-width: 640px) {
    height: 130vh;
  }
`;
const TectStackContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Title = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const TechStackBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 1%;
  padding: 1%;
`;
const TechDeck = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;
const Tech = styled.div`
  padding: 1% 1%;
  margin: 1% 0.5%;
`;
const Img = styled.img`
  width: 64px;
  height: 64px;
  @media (max-width: 640px) {
    width: 32px;
    height: 32px;
  }
`;
const P = styled.p`
  font-size: 0.8rem;
  text-align: center;
  margin: 0;
`;
const HR = styled.hr`
  border-top: 1px solid rgba(0, 0, 0, 0.25);
  width: 70%;
`;

const TechStack = () => {
  return (
    <TechStackDiv>
      <TectStackContainer>
        <Title>
          <h1>Tech Stacks</h1>
        </Title>
        <TechStackBox>
          <Title>
            <h3>Frontend</h3>
          </Title>
          <TechDeck>
            <Tech>
              <Img src="https://cdn.svgporn.com/logos/javascript.svg" id="js" />
              <P>Javascript</P>
            </Tech>
            <Tech>
              <Img src="https://cdn.svgporn.com/logos/html-5.svg" id="html5" />
              <P>HTML5</P>
            </Tech>
            <Tech>
              <Img src="https://cdn.svgporn.com/logos/css-3.svg" id="css3" />
              <P>CSS3</P>
            </Tech>
            <Tech>
              <Img src="https://cdn.svgporn.com/logos/react.svg" id="react" />
              <P>React</P>
            </Tech>
            <Tech>
              <Img src="/assets/jquery.png" id="jquery" />
              <P>jQuery</P>
            </Tech>
            <Tech>
              <Img src="/assets/Bootstrap.png" id="Bootstrap" />
              <P>Bootstrap</P>
            </Tech>
            <Tech>
              <Img src="/assets/styled-components.png" id="styled-components" />
              <P>styled...</P>
            </Tech>
            <Tech>
              <Img src="/assets/sass.png" id="Sass" />
              <P>Sass</P>
            </Tech>
          </TechDeck>
          <HR></HR>
        </TechStackBox>
        <TechStackBox>
          <Title>
            <h3>Backend</h3>
          </Title>
          <TechDeck>
            <Tech>
              <Img src="https://cdn.svgporn.com/logos/nodejs.svg" id="node" />
              <P>Node.js</P>
            </Tech>
            <Tech>
              <Img
                src="https://cdn.svgporn.com/logos/express.svg"
                id="express"
              />
              <P>Express</P>
            </Tech>
            <Tech>
              <Img src="/assets/php.png" id="php" />
              <P>php</P>
            </Tech>
            <Tech>
              <Img
                src="https://cdn.svgporn.com/logos/postgresql.svg"
                id="psql"
              />
              <P>PostgreSQL</P>
            </Tech>
            <Tech>
              <Img src="https://cdn.svgporn.com/logos/mysql.svg" id="mysql" />
              <P>MySQL</P>
            </Tech>
            <Tech>
              <Img src="https://cdn.svgporn.com/logos/mongodb.svg" id="mongo" />
              <P>MongoDB</P>
            </Tech>
          </TechDeck>
          <HR></HR>
        </TechStackBox>
        <TechStackBox>
          <Title>
            <h3>Deployment</h3>
          </Title>
          <TechDeck>
            <Tech>
              <Img src="https://cdn.svgporn.com/logos/aws-ec2.svg" id="ec2" />
              <P>AWS EC2</P>
            </Tech>
            <Tech>
              <Img src="https://cdn.svgporn.com/logos/aws-s3.svg" id="s3" />
              <P>AWS S3</P>
            </Tech>
            <Tech>
              <Img src="https://cdn.svgporn.com/logos/nginx.svg" id="nginx" />
              <P>NGINX</P>
            </Tech>
            <Tech>
              <Img src="/assets/docker.png" id="Docker" />
              <P>Docker</P>
            </Tech>
            <Tech>
              <Img
                src="https://cdn.svgporn.com/logos/heroku-icon.svg"
                id="heroku"
              />
              <P>Heroku</P>
            </Tech>
            <Tech>
              <Img src="https://cdn.svgporn.com/logos/loader.svg" id="loader" />
              <P>loader</P>
            </Tech>
          </TechDeck>
          <HR></HR>
        </TechStackBox>
        <TechStackBox>
          <Title>
            <h3>Developer Skills</h3>
          </Title>
          <TechDeck>
            <Tech>
              <Img src="https://cdn.svgporn.com/logos/git-icon.svg" id="git" />
              <P>Git</P>
            </Tech>
            <Tech>
              <Img src="/assets/github.svg" id="git" />
              <P>Github</P>
            </Tech>
            <Tech>
              <Img src="https://cdn.svgporn.com/logos/yarn.svg" id="yarn" />
              <P>yarn</P>
            </Tech>
            <Tech>
              <Img src="https://cdn.svgporn.com/logos/npm-2.svg" id="npm" />
              <P>npm</P>
            </Tech>
            <Tech>
              <Img
                src="https://cdn.svgporn.com/logos/webpack.svg"
                id="webpack"
              />
              <P>Webpack</P>
            </Tech>
            <Tech>
              <Img src="https://cdn.svgporn.com/logos/babel.svg" id="babel" />
              <P>Babel</P>
            </Tech>
            <Tech>
              <Img
                src="https://azumo.co/wp-content/uploads/2018/08/illustration-agile-methogology.svg"
                id="agile"
              />
              <P>Agile</P>
            </Tech>
            <Tech>
              <Img src="https://cdn.svgporn.com/logos/trello.svg" id="Trello" />
              <P>Trello</P>
            </Tech>
            <Tech>
              <Img src="https://cdn.svgporn.com/logos/figma.svg" id="figma" />
              <P>figma</P>
            </Tech>
          </TechDeck>
        </TechStackBox>
      </TectStackContainer>
    </TechStackDiv>
  );
};
export default TechStack;
