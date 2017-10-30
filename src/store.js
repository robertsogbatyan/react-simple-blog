// Store -> Store Object
// Action -> Function -> Object
// Reducers -> Function(state, action) -> State

import { createStore } from 'redux';
import reducer from './post.reducer';

export default function configureStore() {
	const store = createStore(reducer);
	return store;
}