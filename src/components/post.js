import React, { Component } from 'react';


class Post extends Component {

  componentDidMount () {
    this.props.addPosts(this.props.url);
  }

  render () {
    let {posts, url} = this.props;
    let showPost;
    let filteredPost = Object.keys(posts).filter(post => posts[post].url === url);
    if (filteredPost) {
      showPost =
      <pre key = {filteredPost}>
        {JSON.stringify(posts[filteredPost], null, 2)}
      </pre>
    } else {
      showPost = <div>Loading...</div>
    }

    return (
      <div>
        {showPost}
      </div>
    )
  }
}

export default Post;
