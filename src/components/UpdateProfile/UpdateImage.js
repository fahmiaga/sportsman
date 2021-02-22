import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { uploadImage } from '../../redux/Action/userAction';

import profile from '../../assets/img/anonymous.jpg';

const UpdateImage = () => {
	const [imageData, setImageData] = useState({
		images: null,
	});
	const [imageURL, setImageURL] = useState(null);

	const dispatch = useDispatch();
	const { uploadImg } = useSelector((state) => state.users);
	const token = localStorage.getItem('token');

	const handleUploadImage = () => {
		const data = new FormData();
		data.append('images', imageData);
		const body = {
			images: imageData.images,
		};
		dispatch(uploadImage(body, token));
	};

	return (
		<div>
			<div className='profile'>
				<div className='profile__name'>
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
						{/* <img src={profile} alt='profile' /> */}
					</div>
					<div className='profile__container'>
						<div className='profile__bio'>
							<h2>Name</h2>
							<p>Free Athlete for 0 months</p>
						</div>
						<ul className='profile__data'>
							<li>
								<p>0</p>
								<p>Workouts</p>
							</li>
							<li>
								<p>0</p>
								<p>Followers</p>
							</li>
							<li>
								<p>0</p>
								<p>Following</p>
							</li>
							<li>
								<p>0</p>
								<p>Points</p>
							</li>
						</ul>
					</div>
					{/* <div className='profile__progress'>
						<div className='text-center'>0%</div>
						<Progress />
					</div> */}
					<button onClick={handleUploadImage}>Save</button>
				</div>

				{/* <div>
          <p>Level 1</p>
          <p>500 Points to level 2</p>
        </div> */}
			</div>
		</div>
	);
};

export default UpdateImage;
