import { ADD_POST, REMOVE_POST } from './actions';
const initalState = {
	posts: [],
	loading: false
}

export default function(state = initalState, action) {
	const { type, payload } = action;
	switch (action.type) {
		case ADD_POST:
			return {
				posts: [...state.posts, payload]
			}
		case REMOVE_POST:
			return {
				posts: state.posts.filter(p => p.id !== payload.id)
			};
		default:
			return state;
	}
}