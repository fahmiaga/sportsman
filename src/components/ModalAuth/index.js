import React, { useState } from "react";
import _ from "lodash";
import jwt_decode from "jwt-decode";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import "../../styles/navbar.css";

export default function ProfileMenu() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const token = localStorage.getItem("token");

  let decoded;
  if (token && !_.isEmpty(token)) decoded = jwt_decode(token);

  return (
    <div>
      <div className="toggle">
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle className="toggle-profile">
            {decoded.username}
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>
              <div className="toggle-btn">
                <button>Profile</button>
                <button>Settings</button>
                <button>Help</button>
                <button
                  onClick={() => {
                    localStorage.removeItem("token");
                    window.open("/", "_self");
                  }}
                >
                  Sign Out
                </button>
              </div>
            </DropdownItem>
            <DropdownItem divider />
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
  );
}
