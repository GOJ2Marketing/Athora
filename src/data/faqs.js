// This code imports the gql function from the Apollo Client library, as well as the ApolloClient
// and InMemoryCache classes. It then defines a GraphQL query called GET_FAQS that retrieves all
// FAQs where hasPassword is false. Finally, it creates a new ApolloClient instance with the given
// URI and an InMemoryCache instance, and exports it as the default client.

import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: 'https://athorastg.wpengine.com/graphql',
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      query GetFAQs {
        fAQs(where: { hasPassword: false }) {
          edges {
            node {
              title
              content
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      faqs: data.fAQs.edges.map((edge) => edge.node),
    },
  };
}
