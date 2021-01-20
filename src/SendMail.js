import { IconButton } from "@material-ui/core";
import {
  AttachFile,
  CloseRounded,
  CreateRounded,
  DeleteRounded,
  FormatColorText,
  HeightRounded,
  InsertDriveFileRounded,
  Link,
  LockRounded,
  Mood,
  MoreVertRounded,
  PhotoSizeSelectActualRounded,
  RemoveRounded,
} from "@material-ui/icons";
import React, { useState } from "react";
import "./SendMAil.css";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMsg } from "./features/mailSlice";
function SendMail() {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();
  const [inputRecieverAddress, setinputRecieverAddress] = useState("");
  const [inputMailSubject, setinputMailSubject] = useState("");
  const [inputMailText, setinputMailText] = useState("");
  const [photo, setphoto] = useState("");

  function buildPhotoSelector() {
    const fileSelector = document.createElement("input");
    fileSelector.setAttribute("type", "file");
    fileSelector.setAttribute(
      "accept",
      "image/jpg, image/png ,application/pdf,application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint, text/plain"
    );
    return fileSelector;
  }

  const attachFile = (e) => {
    e.preventDefault();
    const fileSelector = buildPhotoSelector();
    fileSelector.click();
    fileSelector.addEventListener("change", (event) => {
      const file = event.target.files[0];
      setphoto(file);
    });
  };

  const onSubmit = (e) => {};
  const clearphoto = () => {
    setphoto("");
  };

  return (
    <div className="SendMailComponent">
      <div className="SendMailComponentHeader">
        <p className="NewMessageTitle">New Message</p>
        <div className="NewMessageRightHeader">
          <IconButton className="sendmailHeaderIcon">
            <RemoveRounded className="sendmailHeadericon" />
          </IconButton>
          <IconButton className="sendmailHeaderIcon">
            <HeightRounded className="sendmailHeadericon" />
          </IconButton>
          <IconButton className="sendmailHeaderIcon">
            <CloseRounded
              onClick={() => dispatch(closeSendMsg())}
              className="sendmailHeadericon"
            />
          </IconButton>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="RegionMailTo">
          <p>To</p>
          <input
            name="To"
            value={inputRecieverAddress}
            onChange={(e) => setinputRecieverAddress(e.target.value)}
            ref={register({ required: true })}
          />
          {errors.To && (
            <span className="SendMailWarning">
              Please Mention Sender's Address
            </span>
          )}
        </div>
        <div className="RegionSubject">
          <p>Subject</p>
          <input
            name="Subject"
            value={inputMailSubject}
            onChange={(e) => setinputMailSubject(e.target.value)}
            ref={register({ required: true })}
          />
          {errors.Subject && (
            <span className="SendMailWarning">Please Mention Subject</span>
          )}
        </div>
        <textarea
          name="mailText"
          className="SendMailComponentText"
          value={inputMailText}
          onChange={(e) => setinputMailText(e.target.value)}
          ref={register}
        />
        {photo && (
          <p onClick={clearphoto} className="SendMailFile">
            {photo.name} <small>{photo.size / (1024 * 1024)}</small>
          </p>
        )}
        <div className="mailComponentFooter">
          <div className="mailFooterLeft">
            <button type="submit">Send</button>
            <FormatColorText className="footerIcon" />
            <AttachFile onClick={attachFile} className="footerIcon" />
            <Link className="footerIcon" />
            <Mood className="footerIcon" />
            <InsertDriveFileRounded className="footerIcon" />
            <PhotoSizeSelectActualRounded className="footerIcon" />
            <LockRounded className="footerIcon" />
            <CreateRounded className="footerIcon" />
          </div>
          <div className="mailFooterRight">
            <MoreVertRounded className="footerIcon" />
            <DeleteRounded className="footerIcon" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
