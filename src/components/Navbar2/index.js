import React from 'react';
import logo from '../../assets/img/logo/Logo.png';
import { useHistory } from 'react-router-dom';

const Navbar = () => {
	const history = useHistory();

	const handleHome = () => {
		history.push('/');
	};

	const handleSignIn = () => {
		history.push('/login');
	};

	return (
		<>
			<nav className='layout2'>
				<div className='layout2__logo'>
					<img src={logo} onClick={handleHome} alt='logo' className='layout2__img' />
				</div>

				<button onClick={handleSignIn} className='layout2__button'>
					Logout
				</button>
			</nav>
		</>
	);
};

export default Navbar;
