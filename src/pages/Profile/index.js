import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

import Navbar from "../../components/Navbar2";
import profile from "../../assets/img/anonymous.jpg";

const Profile = () => {
  return (
    <div className="back-page">
      <Navbar />
      <div className="profile">
        <div className="profile__name">
          <div className="profile__picture">
            <img src={profile} alt="profile" />
          </div>
          <div className="profile__container">
            <div className="profile__bio">
              <h2>Name</h2>
              <p>Free Athlete for 0 months</p>
            </div>
            <ul className="profile__data">
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
          {/* <div className="text-center">0%</div>
          <Progress /> */}
        </div>

        {/* <div>
          <p>Level 1</p>
          <p>500 Points to level 2</p>
        </div> */}
      </div>

      <div className="edit">
        <div className="edit__list">
          <ListGroup flush>
            <ListGroupItem active tag="button" action>
              Profile
            </ListGroupItem>
            <ListGroupItem tag="button" action>
              Account
            </ListGroupItem>
            <ListGroupItem tag="button" action>
              Privacy
            </ListGroupItem>
            <ListGroupItem tag="button" action>
              Subscritions
            </ListGroupItem>
          </ListGroup>
          {/* <ul>
            <li>Profile</li>
            <li>Account</li>
            <li>Privacy</li>
            <li>Subscritions</li>
          </ul> */}
        </div>
        <section>
          <form className="edit__grid">
            <div className="edit__grid__one">
              <h3>Athlete Profile</h3>
            </div>
            <div className="edit__grid__two">
              <div>
                <span>Name</span>
              </div>
              <div class="form__group field">
                <input
                  type="input"
                  class="form__field"
                  placeholder="Name"
                  name="name"
                  id="name"
                  required
                />
                <label for="name" class="form__label">
                  First Name
                </label>
              </div>
              <div class="form__group field">
                <input
                  type="input"
                  class="form__field"
                  placeholder="Name"
                  name="name"
                  id="name"
                  required
                />
                <label for="name" class="form__label">
                  Last Name
                </label>
              </div>
            </div>
            <div className="edit__grid__three">
              <div>
                <span>Gender</span>
              </div>
              <div>
                <input type="radio" name="" id="" />
                <label htmlFor="">Male</label>
              </div>
              <div>
                <input type="radio" name="" id="" />
                <label htmlFor="">Female</label>
              </div>
            </div>
            <div className="edit__grid__two">
              <div>
                <span>Birthday</span>
              </div>
              <div>
                <label htmlFor="">Date of Birthday</label>
                <input type="date" name="" id="" />
              </div>
            </div>
            <div className="edit__grid__two">
              <div>
                <span>Weight</span>
              </div>
              <div>
                <label htmlFor="">Weight</label>
                <input type="number" name="" id="" />
                <select name="" id="">
                  <option value="">kg</option>
                  <option value="">lbs</option>
                </select>
              </div>
            </div>
            <div className="edit__grid__two">
              <div>
                <span>Height</span>
              </div>
              <div>
                <label htmlFor="">Height</label>
                <input type="number" name="" id="" />
                <select name="" id="">
                  <option value="">cm</option>
                  <option value="">inc</option>
                </select>
              </div>
            </div>
            <div className="edit__grid__two">
              <div>
                <span>Motivational Quote</span>
              </div>
              <div>
                <textarea name="" id="" cols="30" rows="1"></textarea>
              </div>
            </div>
            <div className="edit__grid__four">
              <div>
                <button className="edit__grid__button">Save</button>
              </div>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Profile;
