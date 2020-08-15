import React from 'react';
import styled, { keyframes } from 'styled-components';

const ContactDiv = styled.div`
  position: relative;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;
  overflow-x: hidden;
  width: 100%;
  background-color: #fefbf8;
  color: #1a1a1a;
  padding: 5rem 0rem;
  @media (max-width: 736px) {
    padding: 2rem 0rem;
  }
  @media (max-width: 736px) and (orientation: landscape) {
  }
  @media (max-width: 640px) {
    padding: 2rem 0rem;
  }
`;
const ContactContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Title = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 1rem 0rem;
`;
const Section = styled(Title)`
  margin-top: 1.5rem;
`;
const ContactkBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 1%;
`;
const HR = styled.hr`
  border-top: 1px solid rgba(0, 0, 0, 0.25);
  width: 70%;
`;
const List = styled.div`
  display: flex;
  justify-content: center;
`;
const A = styled.a`
  color: #1a1a1a;
  cursor: pointer;
  padding: 0.1rem 0.5rem;
  border-radius: 0.25rem;
  text-decoration: none;
  margin: 0 0.1rem;
  transition: 0.3s all;
  &:hover {
    text-decoration: underline;
    font-weight: 700;
  }
`;
const Icon = styled.div`
  height: 2.5rem;
  width: 2.5rem;
  border: 3px solid #212529;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const P = styled.p`
  font-size: 1.2rem;
  text-align: center;
  margin: 0;
`;
const run = keyframes`
  0% {
    transform: translateX(-50%); }
  100% {
    transform: translateX(50%); }
`;
const Running = styled.p`
  transform: translateX(-100%);
  animation: ${run} 10s linear infinite;
  transition-delay: 0s;
  margin-bottom: 3px;
  font-size: 1.3rem;
`;
const RunningBox = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  justify-content: center;
`;
const Box = styled.div`
  width: 100%;
  border: 0.5px solid #1a1a1a;
`;
const RunningChildBox = styled.div`
  margin-top: 1rem;
  text-align: center;
  align-items: center;
  justify-content: center;
  color: #1a1a1a;
  background-color: #fefbf8;
  width: 80%;
`;

const ContactMe = () => {
  return (
    <ContactDiv>
      <ContactContainer>
        <Title>
          <h1>Thanks!</h1>
        </Title>
        <ContactkBox>
          <Title>
            <RunningBox>
              <RunningChildBox>
                <h5>
                  I like to learn new thing and challenge it <br />I will keep
                  learning and eager to learn new skills
                  <br /> I hope to go further and grow with you together👍🏻
                  <br />
                </h5>
                <br />
                <br />
                <br />
                <Running>ᕕ( ᐛ )ᕗ</Running>
                <Box></Box>
              </RunningChildBox>
            </RunningBox>
          </Title>
          <Section>
            <P>
              <A href="mailto:jinho6225@hotmail.com">
                <i className="fas fa-envelope" aria-hidden="true"></i>
                &nbsp; jinho6225@hotmail.com
              </A>
            </P>
          </Section>
          <Section>
            <List>
              <A
                href="https://github.com/jinho6225"
                target="_blank"
                aria-label="Github"
              >
                <Icon>
                  <i className="fab fa-github"></i>
                </Icon>
              </A>
              <A
                href="https://www.linkedin.com/in/jinho6225"
                target="_blank"
                aria-label="LinkedIn"
              >
                <Icon>
                  <i className="fab fa-linkedin"></i>
                </Icon>
              </A>
              <A
                href="https://drive.google.com/file/d/1iFmYN3t5UxkwTsB2GFp479VuotrpPKqG/view" 
                target="_blank"
                aria-label="Resume Download"
              >
                <Icon>
                  <i className="far fa-file-alt" aria-hidden="true"></i>
                </Icon>
              </A>
            </List>
          </Section>
          <Section>
            <div>Designed and developed by Jinho Myung © 2020</div>
          </Section>
        </ContactkBox>
      </ContactContainer>
    </ContactDiv>
  );
};
export default ContactMe;
