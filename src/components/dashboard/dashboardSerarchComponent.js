import React, { Component } from "react";
import PropTypes from "prop-types";

class dashboardSerarchComponent extends Component {
  static propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    posts: PropTypes.array.isRequired,
    postsError: PropTypes.bool
  };

  componentWillMount() {
    const { fetchPosts} = this.props;
    fetchPosts();
  }

  render() {
    const { isLoading, posts, postsError } = this.props;
    debugger;
    const postItems = posts.map(post => (
      <div key={post.id}>
        <h3>
          {post.title}
        </h3>
        <p>
          {post.body}
        </p>
      </div>
    ));
    return (
      <div>
        Dashboard
        {isLoading && <div>Loading...</div>}
        {postsError && <div>{JSON.stringify(postsError)}</div>}
        {postItems}
      </div>
    );
  }
}

export default dashboardSerarchComponent;
