import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import SEO from '../components/SEO';

const SliceMasterPage = ({ data: { slicemaster } }) => (
  <>
    <SEO
      title={slicemaster.name}
      image={slicemaster.image?.asset?.fluid?.src}
    />
    <div className="center">
      <Img fluid={slicemaster.image.asset.fluid} />
      <h2>
        <span className="mark">{slicemaster.name}</span>
      </h2>
      <p className="description">{slicemaster.description}</p>
    </div>
  </>
);

export const query = graphql`
  query SingleSlicemasterQuery($slug: String!) {
    slicemaster: sanityPerson(slug: { current: { eq: $slug } }) {
      name
      id
      description
      image {
        asset {
          fluid(maxWidth: 1000, maxHeight: 750) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;

export default SliceMasterPage;
