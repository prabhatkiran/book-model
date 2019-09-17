 import React, {Component} from 'react';
 import Books from './components/books';

class App extends Component {
      render() {
        return (
          <Books books={this.state.books} />
        );
      }
      state = {
        books: []
      }
      componentDidMount() {

        fetch('http://localhost:8080/books',{
          method: "GET",
          mode: "cors"
    })
        .then(res => res.json())
        .then((data) => {
          this.setState({ books: data })
        })
        .catch(console.log)
      }
    }
export default App;

