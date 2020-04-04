import React, { Component } from "react";

import { graphql } from "react-apollo";
import { getSingleBookQuery } from "../queries/query";

export class BookDetail extends Component {
  displayBookDetail = () => {
    const { book } = this.props.data;
    console.log(book);
    if (book) {
      return (
        <div>
          <h2>{book.name}</h2>
          <p>{book.genre}</p>

          <p>{book.author.name}</p>
          <div className="other-book">
            {book.author.books.map((b) => {
              return <li key={b.id}>{b.name}</li>;
            })}
          </div>
        </div>
      );
    } else {
      return <div>No Book</div>;
    }
  };
  render() {
    console.log("inside boook detail");
    console.log(this.props);
    return <div id="book-detail">{this.displayBookDetail()}</div>;
  }
}

export default graphql(getSingleBookQuery, {
  options: (props) => {
    return {
      variables: {
        Id: props.bookId,
      },
    };
  },
})(BookDetail);
