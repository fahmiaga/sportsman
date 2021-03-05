import React, { useState } from 'react';
import Navbar from '../../components/Navbar2';
import { Button } from 'reactstrap';

const Workout = () => {
	const [currentLocation] = useState({
		lat: 52.52437, 
		lng: 13.41053, 
	});
	const [zoom] = useState(17);
    return (
        <>
			<Navbar />
			<div className='bg-container'>
				<div className='sub__side'>
				<ul>
					<li><Button color="danger" size="lg" blok>Tracking</Button></li>	
					<li><Button color="success" size="lg" blok>Workout</Button></li>		
				</ul>
				</div>
				
			</div>
	
        </>
    )
}

export default Workout;