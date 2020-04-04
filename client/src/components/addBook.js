import React, { Component } from "react";
import { flowRight as compose } from "lodash";

import { graphql } from "react-apollo";
import { getAuthorQuery, addBookQuery, getBookQuery } from "../queries/query";

export class AddBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      genre: "",
      authorId: "",
    };
  }
  getAuthors = () => {
    const {
      getAuthorQuery: { loading, authors },
    } = this.props;

    if (loading) {
      return <option disabled>Loading</option>;
    } else {
      return authors.map((a) => {
        return (
          <option key={a.id} value={a.id}>
            {a.name}
          </option>
        );
      });
    }
  };

  submitFrom = (e) => {
    e.preventDefault();

    this.props.addBookQuery({
      variables: {
        name: this.state.name,
        genre: this.state.genre,
        authorId: this.state.authorId,
      },
      refetchQueries: [{ query: getBookQuery }],
    });
  };
  addBook = () => {
    return (
      <div>
        <form id="add-book">
          <div className="field">
            <label>Book name</label>
            <input
              type="text"
              name="author"
              onChange={(e) =>
                this.setState({
                  name: e.target.value,
                })
              }
            />
          </div>
          <div className="field">
            <label>Genre</label>
            <input
              type="text"
              name="genre"
              onChange={(e) =>
                this.setState({
                  genre: e.target.value,
                })
              }
            />
          </div>
          <div className="field">
            <label>Author</label>
            <select
              name="author"
              onChange={(e) =>
                this.setState({
                  author: e.target.value,
                })
              }
            >
              <option>Select Author</option>

              {this.getAuthors()}
            </select>
          </div>
          <button onClick={(e) => this.submitFrom(e)}> +</button>
        </form>
      </div>
    );
  };
  render() {
    return <div>{this.addBook()}</div>;
  }
}

export default compose(
  graphql(getAuthorQuery, { name: "getAuthorQuery" }),
  graphql(addBookQuery, { name: "addBookQuery" })
)(AddBook);
