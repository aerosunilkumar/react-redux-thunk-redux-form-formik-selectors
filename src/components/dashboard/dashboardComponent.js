import React, { Component } from "react";
import PropTypes from "prop-types";
import DashboardSerarchComponent from './dashboardSerarchComponentContainer';

class dashboardComponent extends Component {
  static propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    posts: PropTypes.array.isRequired,
    postsError: PropTypes.bool,
    user: PropTypes.object.isRequired
  };

  componentWillMount() {
    const { fetchPosts } = this.props;
    fetchPosts();
  }

  render() {
    const { isLoading, posts, postsError, user } = this.props;
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
        <div>
          <DashboardSerarchComponent isLoading={isLoading} posts={posts} postsError={postsError} user={user} />
        </div>
        <hr />
        <div>
          Dashboard
        {isLoading && <div>Loading...</div>}
          {postsError && <div>{JSON.stringify(postsError)}</div>}
          {postItems}
        </div>


      </div>
    );
  }
}

export default dashboardComponent;
