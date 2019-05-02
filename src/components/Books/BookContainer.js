import React, { Component } from "react"
import { withRouter } from "react-router-dom"

import Book from "./Book"
import { fetchBook } from "../../api/books"

class BookContainer extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      book: {}
    }
  }

  getBookId = () => {
    const { match } = this.props
    const { id } = match.params 
    return id
  }

  componentDidMount() {
    fetchBook(this.getBookId())
      .then(book => {              
        this.setState({book})
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {    
  
    return <Book book={this.state.book}/>
  }
}

export default withRouter(BookContainer)
