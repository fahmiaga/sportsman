import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { SIGN_IN, SIGN_UP, SET_BOARDING, SIGN_OUT, SET_TOKEN, UPLOAD_IMAGE } from './actionTypes';

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
			// localStorage.setItem('userData', JSON.stringify(decoded));
		})
		.catch((err) => {
			console.log(err);
		});
};

export const onBoardingData = (payload) => {
	return {
		type: SET_BOARDING,
		payload,
	};
};

export const putBoardingData = (token, body) => (dispatch) => {
	const config = {
		headers: { Authorization: token },
	};
	axios
		.put(`api/login/update`, body, config)
		.then((res) => {
			console.log('ini res =>', res);
			// const decoded = jwt_decode(res.data.data);
			dispatch(onBoardingData(res.data.data));
			// localStorage.getItem('token', decoded);
		})
		.catch((err) => {
			console.log(err);
		});
};

export const signOut = () => (dispatch) => {
	dispatch({
		type: SIGN_OUT,
		payload: localStorage.removeItem('token'),
	});
};

export const setDataToken = () => (dispatch) => {
	dispatch({
		type: SET_TOKEN,
		payload: localStorage.getItem('token'),
	});
};

export const uploadImage = (token, body) => (dispatch) => {
	const config = {
		headers: { Authorization: token },
	};
	axios.post(`api/upload`, body, config).then((res) => {
		// console.log('coba', res.data.data);
		dispatch({
			type: UPLOAD_IMAGE,
			payload: res.data.data,
		});
	});
};
