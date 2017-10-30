import React from 'react';

function BlogPost(props) {
  return (
    <div onClick={() => {props.onShowPost(props.post)}}>{props.post.content}</div>
  );
}

export default BlogPost;
