import React, { useState, useEffect } from "react";
import _ from "lodash";
import { useSelector, useDispatch } from "react-redux";
import {
  uploadImage,
  putUserData,
  getUserData,
} from "../../../redux/Action/userAction";

import profile from "../../../assets/img/anonymous.jpg";

const DetailProfile = () => {
  const message = useSelector((state) => state.users.message);
  const userProfile = useSelector((state) => state.users.userProfile);

  const [imageData, setImageData] = useState(null);
  const [imageURL, setImageURL] = useState(null);
  const [userData, setUserData] = useState("");
  const [gender, setGender] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    setUserData(userProfile);
  }, [userProfile]);

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  const handleUploadImage = () => {
    const data = new FormData();
    data.append("images", imageData);
    dispatch(uploadImage(data));
  };

  const handleuserData = () => {
    dispatch(putUserData(userData, gender));
  };

  useEffect((res) => {
    dispatch(getUserData());
    console.log("ini userProfile", userProfile);
    if (userProfile && userProfile.status === 200) {
      localStorage.setItem("token", res.data.data);
    }
  }, []);

  useEffect(() => {
    console.log("Test", userProfile);
    console.log("message =>", message);
  }, [userProfile, message]);

  const onCreate = () => {
    handleUploadImage();
    handleuserData();
  };

  return (
    <>
      <main>
        <div className="pr__wrap">
          <div className="pr__dis">
            {!imageURL ? (
              <>
                <input
                  type="file"
                  id="upload"
                  hidden
                  onChange={(event) => {
                    setImageData(event.target.files[0]);
                    setImageURL(URL.createObjectURL(event.target.files[0]));
                  }}
                />
                <label for="upload" className="profile__picture">
                  {userProfile && userProfile.images !== "0" ? (
                    <img src={userProfile.images} alt="upload"></img>
                  ) : (
                    <img src={profile} alt="upload"></img>
                  )}
                </label>
              </>
            ) : (
              <div className="profile__picture--selected">
                <img src={imageURL} alt="" />
                <button onClick={() => setImageURL(null)}>remove image</button>
              </div>
            )}
            <h3>{userProfile && userProfile.name}</h3>
          </div>
        </div>
        <div className="pr__edit">
          <tr>
            <td className="pr__label">
              <label htmlFor="">Name</label>
            </td>
            <td>
              <input
                type="text"
                onChange={(event) => {
                  handleChange(event);
                }}
                name="name"
                className="pr__input"
                placeholder="Full Name"
                value={userData !== null ? userData.name : ""}
              />
            </td>
          </tr>
          <tr>
            <td className="pr__label">
              <label htmlFor="">Gender</label>
            </td>
            <div className="pr__gender">
              <div className="pr__gender__choose">
                <input
                  type="radio"
                  onChange={(event) => setGender(event.target.value)}
                  name="gender"
                  value="female"
                  id="link_to_female"
                />
                <label htmlFor="link_to_female">
                  <i className="fas fa-female"></i>
                </label>
              </div>
              <div className="pr__gender__choose">
                <input
                  type="radio"
                  onChange={(event) => setGender(event.target.value)}
                  name="gender"
                  value="male"
                  id="link_to_male"
                />
                <label htmlFor="link_to_male">
                  <i className="fas fa-male"></i>
                </label>
              </div>
            </div>
          </tr>
          <tr>
            <td className="pr__label">
              <label htmlFor="">Profile Picture</label>
            </td>
            <td>
              <input
                type="file"
                id="upload"
                onChange={(event) => {
                  setImageData(event.target.files[0]);
                  setImageURL(URL.createObjectURL(event.target.files[0]));
                }}
              />
            </td>
          </tr>
          <button onClick={onCreate} className="pr__button">
            Save
          </button>
        </div>
      </main>
    </>
  );
};

export default DetailProfile;
