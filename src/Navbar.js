import { Avatar, IconButton } from "@material-ui/core";
import {
  AppsRounded,
  ArrowDropDownRounded,
  HelpOutlineRounded,
  MenuRounded,
  SearchRounded,
  SettingsRounded,
} from "@material-ui/icons";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import "./Navbar.css";
function Navbar() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <div className="navbar">
      <div className="Nav">
        <div className="navLeft">
          <IconButton>
            <MenuRounded />
          </IconButton>
          <img
            className="GmailLogo"
            src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png"
            srcSet="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png 1x, https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_r2.png 2x "
            alt=""
          />
        </div>
        <div className="midNav">
          <div className="inputBar">
            <IconButton className="navIcon  inputIcon">
              <SearchRounded className="navicon" />
            </IconButton>
            <input className="input" placeholder="Search mail" />
            <IconButton className="navIcon inputIcon">
              <ArrowDropDownRounded className="navicon " />
            </IconButton>
          </div>
        </div>
        <div className="NavEnd">
          <IconButton className="navIcon">
            <HelpOutlineRounded className="navicon" />
          </IconButton>
          <IconButton className="navIcon">
            <SettingsRounded className="navicon" />
          </IconButton>
          <IconButton className="navIcon">
            <AppsRounded className="navicon" />
          </IconButton>
          <Avatar
            onClick={() => {
              auth.signOut().then(dispatch(logout()));
            }}
            className="navIcon"
            src={user?.photo}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
