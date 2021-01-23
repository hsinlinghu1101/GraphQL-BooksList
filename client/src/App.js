import Booklist from './components/Booklist'
import AddBook from './components/AddBook'
import AddAuthor from './components/AddAuthor'
import ApolloClient from 'apollo-boost'
import {ApolloProvider} from 'react-apollo'


const client = new ApolloClient({
  uri:'http://localhost:4000/graphql'
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>Hsinling Books List</h1>
        <Booklist/>
        <AddAuthor/>
        <AddBook/>
      </div>
    </ApolloProvider>
  );
}

export default App;
