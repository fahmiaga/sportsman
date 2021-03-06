import React from "react";
import Navbar from '../../components/Navbar2';
import Button from '../../components/HistoryUser/chooseMenu';

const HistoryUser = () => {

  return (
    <>
        <Navbar />
        <div className='bg-container'>
        {/* <div className='sub__side'> */}           		 
          <Button/> 
        </div> 
        {/* </div>   */}
    </>
  )
}


export default HistoryUser;