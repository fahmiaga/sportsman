import React, { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { useHistory } from "react-router-dom";
import _ from "lodash";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteAccount,
  putUserPassword,
  getUserData,
} from "../../../redux/Action/userAction";

const DetailProfilePass = (props) => {
  const history = useHistory();

  const { className } = props;
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const userProfile = useSelector((state) => state.users.userProfile);

  const handleDeleteAccount = () => {
    dispatch(deleteAccount());
    localStorage.removeItem("token");
    history.push("/");
  };

  const [userData, setUserData] = useState({});

  useEffect(() => {
    if (userProfile !== null) {
      const name = userProfile.name;
      setUserData({
        name: name,
        password: "",
        confirmPassword: "",
      });
    }
  }, [userProfile]);

  const dispatch = useDispatch();

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  const handleuserData = () => {
    if (userData.password === "") {
      alert("Please Enter Password!");
    } else if (userData.confirmPassword === "") {
      alert("Please enter confirm password");
    } else if (userData.password !== userData.confirmPassword) {
      alert("Password didn't match! Please try again");
    } else {
      alert("Change password successful");
      dispatch(putUserPassword(userData));
    }
  };

  useEffect(
    (res) => {
      dispatch(getUserData());
      if (userProfile && userProfile.status === 200) {
        localStorage.setItem("token", res.data.data);
      }
    },
    [userProfile, dispatch]
  );

  useEffect(() => {}, [userProfile]);

  const onCreate = () => {
    handleuserData();
  };

  return (
    <>
      <main>
        <div className="pr__wrap">
          <div className="pr__dis">
            <div>
              <img
                src={userProfile && userProfile.images}
                alt=""
                className="image-password"
              />
            </div>
            <h3 className="name-pass">{userProfile && userProfile.name}</h3>
          </div>
        </div>
        <div className="pr__edit">
          <tr>
            <td className="pr__label">
              <label htmlFor="">
                New Password<span>*</span>
              </label>
            </td>
            <td>
              <input
                type="password"
                onChange={(event) => handleChange(event)}
                name="password"
                className="pr__input"
                placeholder="Enter New Password"
              />
            </td>
          </tr>
          <tr>
            <td className="pr__label">
              <label htmlFor="">
                Confirm New Password<span>*</span>
              </label>
            </td>
            <td>
              <input
                type="password"
                onChange={(event) => handleChange(event)}
                name="confirmPassword"
                className="pr__input"
                placeholder="Confirm New Password"
              />
            </td>
          </tr>
          <div className="button-wrap">
            <button onClick={onCreate} className="pr__button">
              Save
            </button>
            <p>Or</p>
            <button onClick={toggle} className="button-delete">
              Delete Account
            </button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
              <ModalHeader toggle={toggle}>
                Are you sure you want to delete Your Account?
              </ModalHeader>
              <ModalBody
                style={{
                  padding: "60px",
                  textAlign: "justify",
                  lineHeight: "25px",
                }}
              >
                Deleting your account will permanently remove your profile,
                personal settings, and all other associated information. One
                your account is deleted, you will be logged out and will be
                unable to log back in.
                <h6 style={{ marginTop: "20px", lineHeight: "25px" }}>
                  If you understand and agree to the above statement, and would
                  still like to delete your account, click below
                </h6>
              </ModalBody>
              <ModalFooter>
                <Button onClick={handleDeleteAccount} color="primary">
                  I Agree
                </Button>{" "}
                <Button color="secondary" onClick={toggle}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
          </div>
        </div>
      </main>
    </>
  );
};

export default DetailProfilePass;
