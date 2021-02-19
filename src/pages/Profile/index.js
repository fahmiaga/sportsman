import React from 'react';

import Navbar from '../../components/Navbar2';
import UpdateImage from '../../components/UpdateProfile/updateImage';
import UpdateData from '../../components/UpdateProfile/updateData';

const Profile = () => {
	return (
		<div className='back-page'>
			<Navbar />
			<UpdateImage />
			<UpdateData />
		</div>
	);
};

export default Profile;
