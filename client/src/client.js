import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import gql from 'graphql-tag'

/**
 * Create a new apollo client and export as default
 */

const typeDefs = gql`
    extend type User {
        age: Int
    }
`;

const resolvers = {
    User: {
        age() {
            return 23;
        }
    }
}

const link = new HttpLink({
    uri: 'http://localhost:4000/'
});

const cache = new InMemoryCache();

const client = new ApolloClient({
    cache,
    link,
    resolvers,
    typeDefs
});

export default client;