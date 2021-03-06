import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import SEO from '../components/SEO';

const BeerGridStyles = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

const SingleBeerStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 250px 1fr 40px 80px;
  align-items: center;
  border: 1px solid var(--grey);
  padding: 2rem;
  text-align: center;
  img {
    width: 100%;
    height: 200px;
    object-fit: contain;
  }
`;

const BeersPage = ({ data }) => (
  <>
    <SEO title={`Beers! We have ${data.beers.nodes.length} in stock`} />
    <h2 className="text-center">
      We have {data.beers.nodes.length} Beers Available. Dine in only!
    </h2>
    <BeerGridStyles>
      {data.beers.nodes.map((beer) => (
        // const rating = Math.round(beer.rating.average);
        <SingleBeerStyles key={beer.id}>
          <img src={beer.image} alt={beer.name} />
          <h3>{beer.name}</h3>
          <p>{beer.price}</p>
        </SingleBeerStyles>
      ))}
    </BeerGridStyles>
  </>
);

/*
 <p title={`${rating} out of 5 stars`}>
              {`⭐️`.repeat(rating)}
              <span style={{ filter: `grayscale(100%)` }}>
                {`⭐️`.repeat(5 - rating)}
              </span>
              <span>({beer.rating.reviews})</span>
            </p>
            */

export const query = graphql`
  query BeerQuery {
    beers: allBeer {
      nodes {
        id
        image
        name
        price
        #rating {
        #  average
        #  reviews
        #}
      }
    }
  }
`;

export default BeersPage;
