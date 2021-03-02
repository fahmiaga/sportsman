import React, { useState } from 'react';
import jwt_decode from 'jwt-decode';
import _ from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { uploadImage, deleteAccount, putUserData, getUserData } from '../../redux/Action/userAction';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import Navbar from '../../components/Navbar2';
import profile from '../../assets/img/anonymous.jpg';

const Profile = (props) => {
	const [imageData, setImageData] = useState(null);
	const [imageURL, setImageURL] = useState(null);
	const [userData, setUserData] = useState({
		name: '',
		password: '',
	});
	const [gender, setGender] = useState({
		gender: '',
	});

	const history = useHistory();

	const dispatch = useDispatch();
	const { uploadImg } = useSelector((state) => state.users);

	const { buttonLabel, className } = props;

	const [modal, setModal] = useState(false);

	const toggle = () => setModal(!modal);

	const handleChange = (event) => {
		setUserData({
			...userData,
			[event.target.name]: event.target.value,
		});
	};

	const handleUploadImage = () => {
		const data = new FormData();
		data.append('images', imageData);
		dispatch(uploadImage(token, data));
	};

	const handleuserData = () => {
		dispatch(putUserData(token, userData));
	};

	const handleGetData = () => {
		dispatch(getUserData(token, userData));
	};

	const onCreate = () => {
		handleUploadImage();
		handleuserData();
		handleGetData();
	};

	const handleDeleteAccount = () => {
		dispatch(deleteAccount(token));
		localStorage.removeItem('token');
		history.push('/');
		// .then(() => props.history.push('/'));
		// window.location.reload(true);
	};

	const token = localStorage.getItem('token');

	let decoded;
	if (token && !_.isEmpty(token)) decoded = jwt_decode(token);

	return (
		<div className='pr__container'>
			<Navbar />
			<div className='back-page'>
				<aside className='pr__aside'>
					<ul>
						<li>Profile</li>
						<li>Setting</li>
						<li>Subscrition</li>
						<li>Privacy</li>
					</ul>
				</aside>
				<main className='pr__main'>
					<div className='pr__wrap'>
						<div className='pr__dis'>
							<div>
								{!imageURL ? (
									<div>
										<input
											type='file'
											id='upload'
											hidden
											onChange={(event) => {
												setImageData(event.target.files[0]);
												setImageURL(URL.createObjectURL(event.target.files[0]));
											}}
										/>
										<label for='upload' className='profile__picture'>
											<img src={profile} alt='upload'></img>
										</label>
									</div>
								) : (
									<>
										<div className='profile__picture--selected'>
											<img src={imageURL} alt='' />
											<button onClick={() => setImageURL(null)}>remove image</button>
										</div>
									</>
								)}
							</div>
							<h1>{decoded.name}</h1>
						</div>
						<button onClick={toggle}>Delete Account</button>
						<Modal isOpen={modal} toggle={toggle} className={className}>
							<ModalHeader toggle={toggle}>Are you sure you want to delete Your Account?</ModalHeader>
							<ModalBody style={{ padding: '60px' }}>
								Deleting your account will permanently remove your profile, personal settings, and all other associated information. One your account is deleted, you will
								be logged out and will be unable to log back in.
								<h6>If you understand and agree to the above statement, and would still like to delete your account, click below</h6>
							</ModalBody>
							<ModalFooter>
								<Button onClick={handleDeleteAccount} color='primary'>
									I Agree
								</Button>{' '}
								<Button color='secondary' onClick={toggle}>
									Cancel
								</Button>
							</ModalFooter>
						</Modal>
					</div>
					<div className='pr__edit'>
						<tr>
							<td className='pr__label'>
								{' '}
								<label htmlFor=''>Name</label>
							</td>
							<td>
								<input
									type='text'
									onChange={(event) => {
										handleChange(event);
									}}
									name='name'
									className='pr__input'
									placeholder='Full Name'
								/>
							</td>
						</tr>
						<tr>
							<td className='pr__label'>
								<label htmlFor=''>Gender</label>
							</td>
							<div className='pr__gender'>
								<div className='pr__gender__choose'>
									<i class='fas fa-female'></i>
								</div>
								<div className='pr__gender__choose'>
									<i class='fas fa-male'></i>
								</div>
							</div>
						</tr>
						<tr>
							<td className='pr__label'>
								<label htmlFor=''>Password</label>
							</td>
							<td>
								<input type='password' onChange={(event) => handleChange(event)} name='password' className='pr__input' placeholder='Password' />
							</td>
						</tr>
						<button onClick={onCreate} className='pr__button'>
							Save
						</button>
					</div>
				</main>
			</div>
		</div>
	);
};

export default Profile;
