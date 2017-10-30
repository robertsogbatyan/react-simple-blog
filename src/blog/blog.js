import React, { Component } from 'react';
import AddBlogPost from "./add-blog-post/add-blog-post";
import BlogPost from "./blog-post/blog-post";

class Blog extends Component {
  constructor() {
    super();

    this.addBlogPost = this.addBlogPost.bind(this);
    this.showPost = this.showPost.bind(this);
    this.renderBlogPosts = this.renderBlogPosts.bind(this);
  }

  componentWillMount() {
    this.setState({
      blogPosts: []
    });
  }

  componentDidMount() {
    this.getPosts();
  }

  getPosts() {
    let self = this;

    fetch('http://reduxblog.herokuapp.com/api/posts')
    .then((response) => {
      if (response.status >= 400) {
        throw new Error('Something went wrong...');
      }
      return response.json();
    })
    .then((blogPosts) => {
      self.setState({
        blogPosts: blogPosts
      });
    });
  }

  addBlogPost(content) {
    let self = this;

    let blogPost = {
      id: Math.floor(Math.random() * 1000),
      content: content
    };

    fetch('http://reduxblog.herokuapp.com/api/posts', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(blogPost)
    })
    .then((response) => {
      if (response.status >= 400) {
        throw new Error('Something went wrong...');
      }
      return response.json();
    })
    .then((addedPost) => {
      let blogPosts = this.state.blogPosts;
      blogPosts.push(addedPost);
      this.setState(blogPosts);
    });
  }

  showPost(post) {
    alert(post.content);
  }

  render() {
    return (
      <div>
        {this.renderBlogPosts()}

        <AddBlogPost onSubmit={this.addBlogPost}/>
      </div>
    );
  }

  renderBlogPosts() {
    return this.state.blogPosts.map((post) => <BlogPost post={post} onShowPost={this.showPost} key={post.id}/>);
  }
}

export default Blog;
