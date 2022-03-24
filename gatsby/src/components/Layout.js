import React from 'react';
import styled from 'styled-components';
import 'normalize.css';
import Nav from './Nav';
import Footer from './Footer';
import Typography from '../styles/Typography';
import stripes from '../assets/images/stripes.svg';

const SiteBorderStyles = styled.div`
  max-width: 1000px;
  margin: 7.5rem auto 2.5rem auto;
  //margin-top: clamp(2rem, 10w, 12rem);
  background: white url(${stripes});
  background-size: 45em;
  padding: 5px;
  padding: clamp(5px, 1vw, 25px);
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
  border: 5px solid white;
  box-sizing: content-box;
  @media (max-width: 1100px) {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
`;

const ContentStyles = styled.div`
  background: white;
  padding: 1.25rem;
`;

const Layout = ({ children }) => (
  <>
    <Typography />
    <SiteBorderStyles>
      <ContentStyles>
        <Nav />
        {children}
        <Footer />
      </ContentStyles>
    </SiteBorderStyles>
  </>
);

export default Layout;
