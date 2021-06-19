import "~/styles/index.css";
import "inter-ui/inter.css";
import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "/api/graphql",
  ssrMode: false,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider attribute="class" defaultTheme="light">
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
}