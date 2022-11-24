import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import "./App.css";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Header from "./components/Header/Header";
import IndexCard from "./pages/IndexCard/IndexCard";
import Subject from "./pages/Subject/Subject";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        subjects: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        indexCards: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache,
});

const App = () => {
  return (
    <>
      <ApolloProvider client={client}>
        <Router>
        <Header />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/subjects/:id" element={<Subject />} />
              <Route path="/indexCards/:id" element={<IndexCard />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </Router>
      </ApolloProvider>
    </>
  );
};

export default App;
