import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://api.thegraph.com/subgraphs/name/cerpint4xt/rsvpweb3",
    cache: new InMemoryCache(),
});

export default client;

