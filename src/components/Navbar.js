import "../stylesheets/Navbar.css";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

function Navbar() {
  const currentUser = useSelector((state) => state.user.currentUser);
  const history = useHistory()

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="navbar">
      <img href={null} alt="logo" />
      {currentUser ? (
        <div className="nav-links">
          <NavLink to="" className="nav-center-links">
            Recipes you can make
          </NavLink>
          <NavLink to="" className="nav-center-links">
            Search Recipes
          </NavLink>
          <NavLink to="/" className="nav-center-links">
            Home
          </NavLink>
        </div>
      ) : null}
      <div className="nav-dropdwn">
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <AccountCircleIcon color="primary" />
        </Button>
        <Menu
          elevation={0}
          getContentAnchorEl={null}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          className="user-menu"
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {currentUser ? (
            <div>
              <MenuItem>Profile</MenuItem>
              <MenuItem>Log Out</MenuItem>
            </div>
          ) : (
              <div>
              <MenuItem>Sign Up</MenuItem>
              <MenuItem onClick={() => history.push("login")}>Log In</MenuItem>
              </div>
          )}
        </Menu>
      </div>
    </div>
  );
}

export default Navbar;
