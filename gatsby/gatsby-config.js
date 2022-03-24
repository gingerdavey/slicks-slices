import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    title: `Slicks Slices`,
    siteUrl: `https://gatsby.pizza`,
    description: `The best pizza place in Hamilton`,
    twitter: '@slicksSlices',
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      // this is the name of the plugin you are adding
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'zye0t685',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
