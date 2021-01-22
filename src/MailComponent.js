import { Avatar, IconButton } from "@material-ui/core";
import {
  ArchiveRounded,
  ArrowBackRounded,
  DeleteRounded,
  LabelRounded,
  LibraryAddCheckRounded,
  MarkunreadRounded,
  MoreVertRounded,
  MoveToInboxRounded,
  ReportRounded,
  WatchLaterRounded,
} from "@material-ui/icons";
import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { selectOpenMail } from "./features/mailSlice";
import "./MailComponent.css";
function MailComponent() {
  const history = useHistory();
  const openSelectedMail = useSelector(selectOpenMail);

  return (
    <div className="mailComponent">
      <div className="mailCompTop">
        <IconButton
          className="mailCompIcon"
          onClick={() => history.push("/mails")}
        >
          <ArrowBackRounded className="mailCompicon" />
        </IconButton>
        <div className="mailCompTop1st">
          <IconButton className="mailCompIcon">
            <ArchiveRounded className="mailCompicon" />
          </IconButton>
          <IconButton className="mailCompIcon">
            <ReportRounded className="mailCompicon" />
          </IconButton>
          <IconButton className="mailCompIcon">
            <DeleteRounded className="mailCompicon" />
          </IconButton>
        </div>
        <div className="mailCompTop2nd">
          <IconButton className="mailCompIcon">
            <MarkunreadRounded className="mailCompicon" />
          </IconButton>
          <IconButton className="mailCompIcon">
            <WatchLaterRounded className="mailCompicon" />
          </IconButton>
          <IconButton className="mailCompIcon">
            <LibraryAddCheckRounded className="mailCompicon" />
          </IconButton>
        </div>
        <div className="mailCompTop3nd">
          <IconButton className="mailCompIcon">
            <MoveToInboxRounded className="mailCompicon" />
          </IconButton>
          <IconButton className="mailCompIcon">
            <LabelRounded className="mailCompicon" />
          </IconButton>
          <IconButton className="mailCompIcon">
            <MoreVertRounded className="mailCompicon" />
          </IconButton>
        </div>
      </div>
      <div className="mailCompDetails">
        <p className="mailCompTitle">{openSelectedMail?.topic}</p>
        <div className="mailCompSenderDetails">
          <Avatar className="mailCompAvatar" src="" alt="" />
          <p className="mailCompSenderName">
            {openSelectedMail?.name}
            <small className="mailCompSenderTo">to me</small>
          </p>
        </div>
        <h3 className="mailCompMessage">{openSelectedMail?.mailmessage}</h3>
        <object
          className="mailMediaFile"
          data={openSelectedMail?.media}
          width="500"
          height="450"
        >
          No media file is provided
        </object>
      </div>
    </div>
  );
}

export default MailComponent;
