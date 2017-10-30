export const ADD_POST = "ADD_POST";
export const REMOVE_POST = "REMOVE_POST";

export function addPost(post) {
	return {
		type: ADD_POST,
		payload: post
	};
}

export function removePost(post) {
	return {
		type: REMOVE_POST,
		payload: post
	};
}