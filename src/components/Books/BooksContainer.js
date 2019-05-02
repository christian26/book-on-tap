import React, { Component } from "react"
import { withRouter } from "react-router-dom"

import Books from "./Books"
import { fetchBooks } from "../../api/books"

class BooksContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      books: []
    }
  }

  componentDidMount() {
    fetchBooks()
      .then(books => {        
        this.setState({ books })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {    
    const { books } = this.state

    return <Books books={books}/>
  }
}

export default withRouter(BooksContainer)
