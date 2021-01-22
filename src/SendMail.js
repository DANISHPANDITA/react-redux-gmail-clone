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
import db, { storage } from "./firebase";
import firebase from "firebase";
function SendMail() {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();
  const [inputRecieverAddress, setinputRecieverAddress] = useState("");
  const [inputMailSubject, setinputMailSubject] = useState("");
  const [inputMailText, setinputMailText] = useState("");
  const [photo, setphoto] = useState("");
  const [progress, setprogress] = useState("");
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

  const onSubmit = (e) => {
    if (photo) {
      const uploadTask = storage.ref(`media/${photo}.name}`).put(photo);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          var progress = Math.floor(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          console.log("Upload is " + progress + "% done");
          setprogress(progress);
          switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED:
              console.log("Upload is paused");
              break;
            case firebase.storage.TaskState.RUNNING:
              console.log("Upload is running");
              break;
            default:
              console.log("..");
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            db.collection("gmail")
              .doc("P4c4dxEtAc5DbVEBptd2")
              .collection("messages")
              .add({
                Name: e.Name,
                Topic: e.Topic,
                message: e.message,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                media: downloadURL,
              });
          });
        }
      );
    } else {
      db.collection("gmail")
        .doc("P4c4dxEtAc5DbVEBptd2")
        .collection("messages")
        .add({
          Name: e.Name,
          Topic: e.Topic,
          message: e.message,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
    }
  };

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
            name="Name"
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
            name="Topic"
            value={inputMailSubject}
            onChange={(e) => setinputMailSubject(e.target.value)}
            ref={register({ required: true })}
          />
          {errors.Subject && (
            <span className="SendMailWarning">Please Mention Subject</span>
          )}
        </div>
        <textarea
          name="message"
          className="SendMailComponentText"
          value={inputMailText}
          onChange={(e) => setinputMailText(e.target.value)}
          ref={register}
        />
        {photo && (
          <p onClick={clearphoto} className="SendMailFile">
            {photo.name}{" "}
            <small className="fileSize">
              {(photo.size / 1024).toFixed(2)} KB
            </small>
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
