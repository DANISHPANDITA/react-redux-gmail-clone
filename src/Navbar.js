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
import "./Navbar.css";
function Navbar() {
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
            className="navIcon"
            src="https://lh3.googleusercontent.com/ogw/ADGmqu-lOEQqtZzqvcw_1RkjqPW-2oQmxEsLh8aDRXhn9w=s83-c-mo"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
