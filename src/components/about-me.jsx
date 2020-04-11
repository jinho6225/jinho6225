import React from 'react';
import styled from 'styled-components';

const AboutDiv = styled.div`
  width: 100%;
  background-color: #1a1a1a;
  color: #fef7f1;
  padding: 5rem 0rem;

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
const AboutMeContainer = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 820px;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin: auto;
  @media (max-width: 640px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const PictureBox = styled.div`
  width: 35%;
  padding: 3%;
  margin-top: 2%;
  @media (max-width: 640px) {
    width: 50%;
  }
`;
const Pic = styled.img`
  padding: 2%;
  margin: 5% 0;
  width: 100%;
  object-fit: contain;
  border-radius: 25px;
`;
const List = styled.div`
  display: flex;
  justify-content: center;
`;
const ContentBox = styled.div`
  width: 65%;
  padding: 3%;
  @media (max-width: 640px) {
    width: 80%;
    padding: 5%;
  }
`;
const A = styled.a`
  display: inline-block;
  color: #fef7f1;
  cursor: pointer;
  border: 1px solid gray;
  padding: 0.1rem 0.3rem;
  border-radius: 0.25rem;
  text-decoration: none;
  margin: 0 0.1rem;
  &:hover {
    text-decoration: underline;
  }
`;
const P = styled.p`
  font-size: 1.2rem;
  animation: slide-in-10 0.75s;
  animation-fill-mode: forwards;
`;
const Title = styled.div`
  font-size: 2.5rem;
  margin: 1%;
  width: 100%;
`;

const AboutMe = () => {
  return (
    <AboutDiv>
      <AboutMeContainer>
        <PictureBox>
          <div>
            <Pic src="/dist/assets/profile.jpg" alt="" />
          </div>
          <List>
            <A
              href="https://github.com/jinho6225"
              target="_blank"
              aria-label="Github"
            >
              <div>
                <i className="fab fa-github"></i>
              </div>
            </A>
            <A
              href="https://www.linkedin.com/in/jinho6225"
              target="_blank"
              aria-label="LinkedIn"
            >
              <div>
                <i className="fab fa-linkedin"></i>
              </div>
            </A>
            <A
              href="https://jinho6225.github.io/"
              target="_blank"
              aria-label="Blog"
            >
              <div>
                <i className="fas fa-rocket"></i>
              </div>
            </A>
            <A
              href="mailto:jinho6225@hotmail.com"
              target="_blank"
              aria-label="Email"
            >
              <div>
                <i
                  className="far fa-envelope small-font"
                  aria-hidden="true"
                ></i>
              </div>
            </A>
            <A
              href="/dist/assets/Jinho_Myung.pdf"
              target="_blank"
              aria-label="Resume Download"
            >
              <div>
                <i className="far fa-file-alt" aria-hidden="true"></i>
              </div>
            </A>
          </List>
        </PictureBox>
        <ContentBox>
          <Title>About Me</Title>
          <P>
            Hello! I'm Jinho, a full stack software engineer who like a
            challenge🔥
          </P>
          <P>
            My coding journey began when I realized that I wanted to invent
            solutions for life's everyday problems. I love to make a plan for
            step by step and enjoy the logic of solving coding challenges by
            splitting a big problem into smaller task!😁
          </P>
          <P>
            When I'm not coding, I'm spending my free time either work out for
            crossfit or reading a book
          </P>
        </ContentBox>
      </AboutMeContainer>
    </AboutDiv>
  );
};
export default AboutMe;
