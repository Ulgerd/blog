import React, { Component } from 'react';


class Blog extends Component {

  componentDidMount() {
    this.props.addPosts('/blog');
  }

  render() {
    let {posts} =this.props;
    return (
      <div>
        {
          Object.keys(posts).map( (post) =>
            <pre key = {post}>
              {JSON.stringify(posts[post], null, 2)}
            </pre>
          )
        }
      </div>
    )
  }
}

export default Blog;
