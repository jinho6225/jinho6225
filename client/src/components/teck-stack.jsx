import React from 'react';
import styled from 'styled-components';

const TechStackDiv = styled.div`
  width: 100%;
  background-color: #fefbf8;
  color: #1a1a1a;
  padding: 5%;

  @media (max-width: 900px) {
  }
  @media (max-width: 736px) {
  }
  @media (max-width: 736px) and (orientation: landscape) {
  }
  @media (max-width: 640px) {
  }
  @media (max-width: 540px) {
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
          <TechDeck>
            <Tech>
              <Img src="https://cdn.svgporn.com/logos/javascript.svg" id="js" />
              <P>Javascript</P>
            </Tech>
            <Tech>
              <Img src="https://cdn.svgporn.com/logos/react.svg" id="react" />
              <P>React</P>
            </Tech>
            <Tech>
              <Img src="https://cdn.svgporn.com/logos/typescript-icon.svg" id="typescript" />
              <P>Typescript</P>
            </Tech>                        
            <Tech>
              <Img src="https://cdn.svgporn.com/logos/nodejs-icon.svg" id="node" />
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
              <Img src="https://cdn.svgporn.com/logos/d3.svg" id="d3" />
              <P>D3</P>
            </Tech>
            <Tech>
              <Img src="https://cdn.svgporn.com/logos/docker-icon.svg" id="Docker" />
              <P>Docker</P>
            </Tech>
            <Tech>
              <Img src="https://cdn.svgporn.com/logos/ubuntu.svg" id="ubuntu" />
              <P>Ubuntu</P>
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
              <Img src="https://cdn.svgporn.com/logos/redux.svg" id="redux" />
              <P>Redux</P>
            </Tech>

            <Tech>
              <Img src="https://cdn.svgporn.com/logos/python.svg" id="python" />
              <P>python</P>
            </Tech>
            <Tech>
              <Img src="https://cdn.svgporn.com/logos/django-icon.svg" id="Django" />
              <P>Django</P>
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
              <Img
                src="https://cdn.svgporn.com/logos/sequelize.svg"
                id="mysql"
              />
              <P>Sequelize</P>
            </Tech>
            <Tech>
              <Img src="https://cdn.svgporn.com/logos/mongodb.svg" id="mongo" />
              <P>MongoDB</P>
            </Tech>
            <Tech>
              <Img
                src="https://cdn.svgporn.com/logos/heroku-icon.svg"
                id="heroku"
              />
              <P>Heroku</P>
            </Tech>
            <Tech>
              <Img
                src="https://cdn.svgporn.com/logos/jira.svg"
                id="jira"
              />
              <P>JIRA</P>
            </Tech>
            <Tech>
              <Img
                src="https://cdn.svgporn.com/logos/confluence.svg"
                id="confluence"
              />
              <P>Confluence</P>
            </Tech>
            <Tech>
              <Img
                src="https://cdn.svgporn.com/logos/bootstrap.svg"
                id="bootstrap"
              />
              <P>Bootstrap</P>
            </Tech>
            <Tech>
              <Img
                src="https://cdn.svgporn.com/logos/sass.svg"
                id="Sass"
              />
              <P>Sass</P>
            </Tech>
            <Tech>
              <Img
                src="https://cdn.svgporn.com/logos/markdown.svg"
                id="markdown"
              />
              <P>Markdown</P>
            </Tech>
          </TechDeck>
          <TechDeck>                                        
            <Tech>
              <Img src="https://cdn.svgporn.com/logos/nginx.svg" id="nginx" />
              <P>NGINX</P>
            </Tech>



            <Tech>
              <Img src="https://cdn.svgporn.com/logos/aws-ec2.svg" id="ec2" />
              <P>AWS EC2</P>
            </Tech>
            <Tech>
              <Img src="https://cdn.svgporn.com/logos/amazon-connect.svg" id="amazon-connect" />
              <P>API-Connect</P>
            </Tech>            
            <Tech>
              <Img src="https://cdn.svgporn.com/logos/aws-api-gateway.svg" id="aws-api-gateway" />
              <P>API-Gateway</P>
            </Tech>
            <Tech>
              <Img src="https://cdn.svgporn.com/logos/aws-lambda.svg" id="Lambda" />
              <P>Lambda</P>
            </Tech>
            <Tech>
              <Img src="https://cdn.svgporn.com/logos/aws-s3.svg" id="s3" />
              <P>AWS S3</P>
            </Tech>
            <Tech>
              <Img src="https://cdn.svgporn.com/logos/aws-dynamodb.svg" id="dynamodb" />
              <P>AWS dynamodb</P>
            </Tech>
            <Tech>
              <Img src="https://cdn.svgporn.com/logos/git-icon.svg" id="git" />
              <P>Git</P>
            </Tech>
            <Tech>
              <Img src="https://cdn.svgporn.com/logos/github-icon.svg" id="git" />
              <P>GitHub</P>
            </Tech>
            <Tech>
              <Img src="https://cdn.svgporn.com/logos/yarn.svg" id="yarn" />
              <P>yarn</P>
            </Tech>
            <Tech>
              <Img src="https://cdn.svgporn.com/logos/npm-icon.svg" id="npm" />
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
              <Img src="https://cdn.svgporn.com/logos/trello.svg" id="Trello" />
              <P>Trello</P>
            </Tech>
            <Tech>
              <Img src="https://cdn.svgporn.com/logos/figma.svg" id="figma" />
              <P>Figma</P>
            </Tech>
            <Tech>
              <Img src="https://cdn.svgporn.com/logos/postman-icon.svg" id="postman" />
              <P>Postman</P>
            </Tech>
            <Tech>
              <Img src="https://cdn.svgporn.com/logos/homebrew.svg" id="homebrew" />
              <P>Homebrew</P>
            </Tech>
            <Tech>
              <Img src="https://cdn.svgporn.com/logos/visual-studio-code.svg" id="visual-studio-code" />
              <P>vs-code</P>
            </Tech>
            <Tech>
              <Img src="https://cdn.svgporn.com/logos/jenkins.svg" id="jenkins" />
              <P>Jenkins</P>
            </Tech>
          </TechDeck>                    
        </TechStackBox>
      </TectStackContainer>
    </TechStackDiv>
  );
};
export default TechStack;
