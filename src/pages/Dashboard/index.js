import React from 'react';
import Navbar from '../../components/Navbar2';
import DashboardImg from '../../assets/img/dashboard/dashboard.png';
import Appstore from '../../assets/img/logo/appstore.png';
import Playstore from '../../assets/img/logo/googlePlayStore.png';

const Dashboard = () => {
	return (
		<>
			<Navbar />
			<div className='dashboard__container'>
				<img src={DashboardImg} alt='' />
				<div className='dashboard__text'>
					<h1>Start to track your workout</h1>
					<p>You can only track your plan on mobile devices. Download sportman to get started. Get now for free!</p>
					<img src={Appstore} alt='' />
					<img src={Playstore} alt='' />
				</div>
			</div>
		</>
	);
};

export default Dashboard;
