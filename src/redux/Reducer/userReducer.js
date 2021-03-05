import { SIGN_IN, SIGN_UP, SET_BOARDING, SIGN_OUT, SET_TOKEN, UPLOAD_IMAGE, MESSAGE_ERROR } from '../Action/actionTypes';

const initialState = {
	signUp: '',
	signIn: '',
	token: null,
	status: null,
	// jwtToken: '',
	uploadImg: null,
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case SIGN_UP:
			return {
				...state,
				signUp: action.payload,
			};
		case SIGN_IN:
			return {
				...state,
				signIn: action.payload.token,
				status: action.payload.status,
			};
		case SET_BOARDING:
			return {
				...state,
				boarding: action.payload,
			};
		case SIGN_OUT:
			return {
				...state,
				signOut: action.payload,
			};
		case SET_TOKEN:
			return {
				...state,
				token: action.token,
			};
		case UPLOAD_IMAGE:
			return {
				...state,
				uploadImg: action.payload,
			};
		case MESSAGE_ERROR:
			return {
				...state,
				message:action.payload,
			}
		default:
			return state;
	}
};

export default userReducer;
