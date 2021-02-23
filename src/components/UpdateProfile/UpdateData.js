import React, { useState } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const UpdateData = () => {
	const [userData, setUserData] = useState({
		firstname: '',
		lastname: '',
		birthday: '',
		weight: '',
		height: '',
		motivational: '',
	});

	const [gender, setGender] = useState('');

	const handleChange = (event) => {
		setUserData({
			...userData,
			[event.target.name]: event.target.value,
		});
	};

	const UploadForm = () => {
		// code below for fetch
	};
	return (
		<div>
			<div className='edit'>
				<div className='edit__list'>
					<ListGroup flush>
						<ListGroupItem active tag='button' action>
							Profile
						</ListGroupItem>
						<ListGroupItem tag='button' action>
							Account
						</ListGroupItem>
						<ListGroupItem tag='button' action>
							Privacy
						</ListGroupItem>
						<ListGroupItem tag='button' action>
							Subscritions
						</ListGroupItem>
					</ListGroup>
					{/* <ul>
            <li>Profile</li>
            <li>Account</li>
            <li>Privacy</li>
            <li>Subscritions</li>
          </ul> */}
				</div>
				<section>
					<form className='edit__grid'>
						<div className='edit__grid__one'>
							<h3>Athlete Profile</h3>
						</div>
						<div className='edit__grid__two'>
							<div>
								<span>Name</span>
							</div>
							<div className='form'>
								<label for='name' className=''>
									First Name
								</label>
								<input type='text' onChange={(event) => handleChange(event)} className='form__label1' name='firstname' id='name' required />
							</div>
							<div className='form'>
								<label for='name' className=''>
									Last Name
								</label>
								<input type='text' onChange={(event) => handleChange(event)} className='form__label' name='lastname' id='name' required />
							</div>
						</div>
						<div className='edit__grid__three'>
							<div>
								<span>Gender</span>
							</div>
							<div>
								<input type='radio' onChange={(event) => handleChange(event)} name='' id='' />
								<label htmlFor='' className='edit__grid__three__label'>
									Male
								</label>
							</div>
							<div>
								<input type='radio' onChange={(event) => handleChange(event)} name='' id='' />
								<label htmlFor='' className='edit__grid__three__label'>
									Female
								</label>
							</div>
						</div>
						<div className='edit__grid__two'>
							<div>
								<span>Birthday</span>
							</div>
							<div>
								<label htmlFor=''>Date of Birth</label>
								<input type='date' onChange={(event) => handleChange(event)} name='' id='' className='form__label' />
							</div>
						</div>
						<div className='edit__grid__two'>
							<div>
								<span>Weight</span>
							</div>
							<div>
								<label htmlFor=''>Weight</label>
								<div className='form__weight'>
									<input type='number' onChange={(event) => handleChange(event)} name='' id='' />
									<select name='' id=''>
										<option value=''>kg</option>
										<option value=''>lbs</option>
									</select>
								</div>
							</div>
						</div>
						<div className='edit__grid__two'>
							<div>
								<span>Height</span>
							</div>
							<div>
								<label htmlFor=''>Height</label>
								<div className='form__weight'>
									<input type='number' onChange={(event) => handleChange(event)} name='' id='' />
									<select name='' id=''>
										<option value=''>cm</option>
										<option value=''>inc</option>
									</select>
								</div>
							</div>
						</div>
						<div className='edit__grid__five'>
							<div>
								<span>Motivational Quote</span>
							</div>
							<div>
								<textarea name='' onChange={(event) => handleChange(event)} id='' cols='50' rows='1' className='edit__grid__five__text'></textarea>
							</div>
						</div>
						<div className='edit__grid__four'>
							<div>
								<button className='edit__grid__button'>Save</button>
							</div>
						</div>
					</form>
				</section>
			</div>
		</div>
	);
};

export default UpdateData;
