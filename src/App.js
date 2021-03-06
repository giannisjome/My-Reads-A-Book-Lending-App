import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Shelves from './Shelves'
import BooksSearch from './searching'
import * as BooksAPI from './BooksAPI.js'
import './App.css'

class App extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
    .then((books) => {
      this.setState({
        books
      })
    })
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update({id: book.id}, shelf)
    .then(() => {
      book.shelf = shelf
      this.setState(state => ({
        books: state.books.filter(b => b.id !== book.id).concat(book)
      }))
    })
  }

  render() {
    return (
      <div className="App">
        <header className="bookshelf-title">
          <h1 className="title">My Reads</h1>
        </header>
        <Route exact path="/" render = {() => (
          <Shelves
            onChangeShelf={this.changeShelf}
            books={this.state.books}
          />
        )}/>
        <Route path="/search" render = {() => (
          <BooksSearch
            onChangeShelf={this.changeShelf}
            booksOnShelf={this.state.books}
          />
        )}/>
      </div>
    );
  }
}

export default App;
