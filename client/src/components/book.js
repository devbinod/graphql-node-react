import React, { Component } from "react";

import { graphql } from "react-apollo";
import { getBookQuery } from "../queries/query";
import BookDetail from "./bookDetail";

export class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      select: null,
    };
  }
  displayBook = () => {
    let {
      data: { books, loading },
    } = this.props;

    if (loading) {
      return <div>loading.....</div>;
    }

    return books.map((book) => {
      return (
        <li key={book.id} onClick={(e) => this.setState({ select: book.id })}>
          {book.name}
        </li>
      );
    });
  };
  render() {
    return (
      <div>
        <ul id="book-list"> {this.displayBook()}</ul>
        <BookDetail bookId={this.state.select} />
      </div>
    );
  }
}

export default graphql(getBookQuery)(BookList);
