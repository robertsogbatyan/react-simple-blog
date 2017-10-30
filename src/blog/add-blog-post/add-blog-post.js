import React, { Component } from 'react';

class AddBlogPost extends Component {
  constructor(props) {
    super(props);

    this.onContentChange = this.onContentChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillMount() {
    this.setState({
      content: ''
    });
  }

  onContentChange(event) {
    this.setState({
      content: event.target.value
    });
  }

  onSubmit() {
    this.props.onSubmit(this.state.content);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <textarea onChange={this.onContentChange}></textarea>
        <button>Submit</button>
      </form>
    );
  }
}

export default AddBlogPost;
