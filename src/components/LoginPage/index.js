import React, { useState, useEffect } from 'react';
import Logo from '../../assets/img/logo/Logo.png';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { postSignIn } from '../../redux/Action/userAction';
import _ from 'lodash';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

const LoginPage = () => {
	useEffect(() => {
		// Update the document title using the browser API
		document.title = `Login`;
	});

	const history = useHistory();
	const dispatch = useDispatch();
	const data = useSelector((state) => state.users.signIn);
	const status = useSelector((state) => state.users.status);

	const [userData, setUserData] = useState({
		email: '',
		password: '',
	});

	const handleSignUp = () => {
		history.push('/register');
	};

	const handleHome = () => {
		history.push('/');
	};

	const onSubmit = (e) => {
		e.preventDefault();
		// console.log("Submit login");
		dispatch(postSignIn(userData));
		if (_.isEmpty(data)) {
			NotificationManager.info('Loading', '', 1000);
		}
	};

	const handleChange = (e) => {
		console.log('log handle change');
		setUserData({
			...userData,
			[e.target.name]: e.target.value,
		});
	};

	// useEffect(() => {
	//  if (data && !_.isEmpty(data)) {
	//       return data
	//   }
	// },[data])

	useEffect(() => {
		if (data && status) {
			history.push('/onboarding');
		} else if (status === false) {
			history.push('/');
		}
	}, [data]);

	console.log('userData =>', userData);
	console.log('data =>', data);

	return (
		<>
			<div className='bg-login'>
				<img onClick={handleHome} className='login-logo' src={Logo} alt='sportsman' />
				<div className='login-container'>
					<h2>SIGN IN</h2>
					<div className='form__group field'>
						<input type='email' class='form__field' placeholder='Email' name='email' id='email' required onChange={handleChange} />
						<label for='email' class='form__label'>
							Email
						</label>
					</div>

					<div className='form__group field'>
						<input type='password' class='form__field' placeholder='Password' name='password' id='password' required onChange={handleChange} />
						<label for='password' class='form__label'>
							Password
						</label>
					</div>

					<button onClick={onSubmit} className='signin-button'>
						SIGN IN
					</button>
					<div className='redirect'>
						Don't have an account?
						<span onClick={handleSignUp}> Register here</span>
						<p>Logged in as: {data.name}</p>
						<NotificationContainer />
					</div>
				</div>
			</div>
		</>
	);
};

export default LoginPage;
