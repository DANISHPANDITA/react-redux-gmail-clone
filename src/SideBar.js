import { Avatar, Button, IconButton } from "@material-ui/core";
import {
  AddRounded,
  Inbox,
  InsertDriveFileRounded,
  KeyboardArrowDownRounded,
  KeyboardRounded,
  LabelRounded,
  SendRounded,
  StarRounded,
  Videocam,
  WatchLaterRounded,
} from "@material-ui/icons";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { openSendMsg } from "./features/mailSlice";
import "./SideBar.css";
import SideBarOption from "./SideBarOption";

function SideBar() {
  const dispatch = useDispatch();

  return (
    <div className="sidebar">
      <div className="composeMsg">
        <Button
          onClick={() => dispatch(openSendMsg())}
          startIcon={<AddRounded className="addCompose" />}
        >
          Compose
        </Button>
      </div>
      <div className="sidebarOptions">
        <Link to="/mails">
          <SideBarOption inbox Icon={Inbox} text="Inbox" number="1" />
        </Link>
        <SideBarOption Icon={StarRounded} text="Starred" number="1" />
        <SideBarOption Icon={WatchLaterRounded} text="Snoozed" number="1" />
        <SideBarOption Icon={SendRounded} text="Sent" number="1" />
        <SideBarOption Icon={InsertDriveFileRounded} text="Drafts" number="1" />
        <SideBarOption Icon={LabelRounded} text="[lmap]/Trash" number="1" />
        <SideBarOption Icon={KeyboardArrowDownRounded} text="More" number="1" />
      </div>
      <div className="meet">
        <p className="SidebarHeader">Meet</p>
        <SideBarOption Icon={Videocam} text="New Meeting" />
        <SideBarOption Icon={KeyboardRounded} text="Join a Meeting" />
      </div>
      <div className="Hangouts">
        <h3 className="SidebarHeader">Hangouts</h3>
        <div className="HangoutsDetails">
          <div className="leftHangoutside">
            <Avatar
              className="HangoutsAvatar"
              src="https://lh3.googleusercontent.com/ogw/ADGmqu-lOEQqtZzqvcw_1RkjqPW-2oQmxEsLh8aDRXhn9w=s83-c-mo"
              alt=""
            />
            <p className="HangoutsName">Danish</p>
          </div>
          <IconButton className="navIcon">
            <AddRounded className="navicon" />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
