import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { SIGN_IN, SIGN_UP, SET_TOKEN } from './actionTypes';

export const signUp = (payload) => {
	return {
		type: SIGN_UP,
		payload,
	};
};

export const postSignUp = (body) => (dispatch) => {
	axios
		.post(`api/register`, body)
		.then((res) => {
			console.log('ini res =>', res);
			const decoded = jwt_decode(res.data.data.token);
			dispatch(signIn(decoded));
		})
		.catch((err) => {
			console.log(err);
		});
};

export const signIn = (payload) => {
	return {
		type: SIGN_IN,
		payload,
	};
};

export const postSignIn = (body) => (dispatch) => {
	axios
		.post(`api/login`, body)
		.then((res) => {
			console.log('ini res =>', res);
			const decoded = jwt_decode(res.data.data.token);
			dispatch(signIn(decoded));
			localStorage.setItem('token', res.data.data.token);
			localStorage.setItem('userData', JSON.stringify(decoded));
		})
		.catch((err) => {
			console.log(err);
		});
};

export const setDataToken = () => (dispatch) => {
	dispatch({
		type: SET_TOKEN,
		payload: localStorage.getItem('token'),
	});
};
