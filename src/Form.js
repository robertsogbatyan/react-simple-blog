import React from 'react';
import { connect } from 'react-redux';
import { addPost, removePost } from './actions';
import componentWithLoader from './componentWithLoader';

class Form extends React.Component {
	passProps = () => {
		this.props.handleFormSubmit({});
	}
	render() {
		
		return (
			<div>
			{JSON.stringify(this.props.posts)}
			<button
				onClick={() => this.props.addPost({ id: 1, title: 'title' })}
			>Add Post</button>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		posts: state.posts,
		loading: state.loading
	};
}

function mapDispatchToProps(dispatch) {
	return {
		addPost: (post) => dispatch(addPost(post)),
		removePost: (post) => dispatch(removePost(post)),
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Form);

