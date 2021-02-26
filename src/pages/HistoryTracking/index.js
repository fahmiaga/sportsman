import React from 'react';
import Navbar from '../../components/Navbar1';

const Tracking = () => {
    return (
        <>
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
					<div className='pr__dis'>
						
						<h1>decode</h1>
					</div>
					<div className='pr__edit'>
						<tr>
							<td className='pr__label'>
								{' '}
								<label htmlFor=''>Name</label>
							</td>
							<td>
								
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
								<input type='password'  name='password' className='pr__input' placeholder='Password' />
							</td>
						</tr>
						<button className='pr__button'>
							Save
						</button>
					</div>
				</main>
			</div>
		</div>
        </>
    )
}

export default Tracking;