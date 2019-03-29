import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Toolbar from './components/toolbar'
import Blog from './components/blog';
import Post from './components/post';
import blog from './data/blog';
import './App.css';

class App extends Component {
  state = {
    posts: {},
    blog: {}
  }

  componentDidMount () {
    //imitating fetch here
    this.setState({
      blog: [...blog]
    })
  }

  addPosts = (url) => {
    let newPosts ={...this.state.posts};
    let blogFiltered =
      (url === '/blog') ?
        blog :
        blog.filter(post => post.url === url);

    blogFiltered.map((post, index) => {
      newPosts = {...newPosts, [post.url]: post}
      return null;
    })

    this.setState({
      posts: {...newPosts}
    })
  }

  render() {
    let {blog} = this.state;
    if (Object.keys(blog).length === 0) return null;
    return (
      <Router>
        <div className="App">
        <Toolbar />
        <hr></hr>
          <Switch>

            <Route
              exact path='/:blog?'
              render={ ({ match }) =>
                <Blog
                  addPosts = {this.addPosts}
                  posts = {this.state.posts}
                />
              }
            />

            <Route
              path='/blog/:id'
              render={ ({match}) =>
                <Post
                  key={match.url}
                  url = {match.url}
                  addPosts = {this.addPosts}
                  posts = {this.state.posts}
                />
              }
            />

          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
