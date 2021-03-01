// import React, { useState, useEffect } from "react";
// import {
//   Button,
//   Col,
//   FormGroup,
//   Label,
//   Input,
//   Container,
//   Form,
// } from "reactstrap";
// import { useDispatch, useSelector } from "react-redux";
// import { setOnboard } from "../../redux/Action/userAction";

// function OnBoarding() {
//   const [userData, setUserData] = useState("");

//   const dispatch = useDispatch();

//   const handleChange = (e) => {
//     setUserData({
//       ...userData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(setOnboard(userData));
//   };

//   useEffect(() => {
//     console.log(userData);
//   }, [userData]);

//   return (
//     <>
//       <div className="onboarding-bg">
//         <div className="onboarding-container">
//           <Container>
//             <Form onSubmit={handleSubmit}>
//               <FormGroup tag="fieldset" row>
//                 <h3 className="mt-4 ml-3">Select Your Gender</h3>
//                 <Col sm={10}>
//                   <FormGroup check className="mt-1">
//                     <Label check>
//                       <Input
//                         onChange={handleChange}
//                         type="radio"
//                         name="gender"
//                         value="male"
//                       />
//                       Male
//                     </Label>
//                   </FormGroup>
//                   <FormGroup check>
//                     <Label check>
//                       <Input
//                         onChange={handleChange}
//                         type="radio"
//                         name="gender"
//                         value="female"
//                       />
//                       Female
//                     </Label>
//                   </FormGroup>
//                 </Col>
//               </FormGroup>
//               <FormGroup tag="fieldset" row>
//                 <h3 className="mt-4 ml-3">How Many workout</h3>
//                 <Col sm={10}>
//                   <FormGroup check className="mt-1">
//                     <Label check>
//                       <Input
//                         onChange={handleChange}
//                         type="radio"
//                         name="intensity"
//                         value="1"
//                       />
//                       0 - 1 Workouts
//                     </Label>
//                   </FormGroup>
//                   <FormGroup check>
//                     <Label check>
//                       <Input
//                         onChange={handleChange}
//                         type="radio"
//                         name="intensity"
//                         value="2"
//                       />
//                       2 - 4 Workouts
//                     </Label>
//                   </FormGroup>
//                   <FormGroup check>
//                     <Label check>
//                       <Input
//                         onChange={handleChange}
//                         type="radio"
//                         name="intensity"
//                         value="3"
//                       />
//                       5+ Workouts
//                     </Label>
//                   </FormGroup>
//                 </Col>
//               </FormGroup>
//               <Button color="success">Submit</Button>
//             </Form>
//           </Container>
//         </div>
//       </div>
//     </>
//   );
// }

// export default OnBoarding;
