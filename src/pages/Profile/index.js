import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import _ from "lodash";
import { useSelector, useDispatch } from "react-redux";
import { uploadImage } from "../../redux/Action/userAction";
import { putUserData } from "../../redux/Action/userAction";

import Navbar from "../../components/Navbar2";
import profile from "../../assets/img/anonymous.jpg";

const Profile = () => {
  useEffect(() => {
    document.title = "Profile";
  }, []);

  const [imageData, setImageData] = useState(null);
  const [imageURL, setImageURL] = useState(null);
  const [userData, setUserData] = useState({
    name: "",
    gender: "",
    password: "",
  });
  // const [gender, setGender] = useState('');

  const dispatch = useDispatch();
  const { uploadImg } = useSelector((state) => state.users);

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  const handleUploadImage = () => {
    const data = new FormData();
    data.append("images", imageData);
    dispatch(uploadImage(token, data));
  };

  const handleuserData = () => {
    dispatch(putUserData(token, userData));
  };

  //   const handleUploadForm = () => {
  //     //fetch API upload form
  //   };

  const onCreate = () => {
    handleUploadImage();
    handleuserData();
  };

  const token = localStorage.getItem("token");

  let decoded;
  if (token && !_.isEmpty(token)) decoded = jwt_decode(token);

  return (
    <div className="pr__container">
      <Navbar />
      <div className="back-page">
        <aside className="pr__aside">
          <ul>
            <li>Profile</li>
            <li>Setting</li>
            <li>Subscrition</li>
            <li>Privacy</li>
          </ul>
        </aside>
        <main className="pr__main">
          <div className="pr__dis">
            <div>
              {!imageURL ? (
                <div>
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
                    <img src={profile} alt="upload"></img>
                  </label>
                </div>
              ) : (
                <>
                  <div className="profile__picture--selected">
                    <img src={imageURL} alt="" />
                    <button onClick={() => setImageURL(null)}>
                      remove image
                    </button>
                  </div>
                </>
              )}
            </div>
            <h1>{decoded.name}</h1>
          </div>
          <div className="pr__edit">
            <tr>
              <td className="pr__label">
                {" "}
                <label htmlFor="">Name</label>
              </td>
              <td>
                <div class="radio-toolbar">
                  <input
                    type="text"
                    onChange={(event) => {
                      handleChange(event);
                    }}
                    name="name"
                    className="pr__input"
                    placeholder="Full Name"
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td className="pr__label">
                <label htmlFor="">Gender</label>
              </td>
              <div className="pr__gender">
                <div className="pr__gender__choose">
                  {/* <input type="radio" value="male" /> */}
                  <i className="fas fa-female"></i>
                </div>
                <div className="pr__gender__choose">
                  <i className="fas fa-male"></i>
                </div>
              </div>
            </tr>
            <tr>
              <td className="pr__label">
                <label htmlFor="">Password</label>
              </td>
              <td>
                <input
                  type="password"
                  onChange={(event) => handleChange(event)}
                  name="password"
                  className="pr__input"
                  placeholder="Password"
                />
              </td>
            </tr>
            <button onClick={onCreate} className="pr__button">
              Save
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Profile;
