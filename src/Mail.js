import { Star } from "@material-ui/icons";
import Checkbox from "@material-ui/core/Checkbox";
import React from "react";
import "./Mail.css";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectMail } from "./features/mailSlice";

function Mail({ name, mailmessage, timestamp, topic, media }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const openMail = () => {
    dispatch(selectMail({ name, mailmessage, timestamp, topic, media }));
    history.push("/mail");
  };

  return (
    <div className="Mail">
      <div onClick={openMail} className="mailRow">
        <Checkbox color="black" className="mailRowcheckbox" />
        <Star className="mailRowstar" />
        <h5 className="mailSender">{name}</h5>
        <div className="mailmsg">
          <h5 className="mailTopic">{topic} </h5>
          <p className="mailMessage"> - {mailmessage}</p>
        </div>
        <h5 className="mailTimestamp">
          {new Date(timestamp?.toDate()).toTimeString().slice(0, 8)}
        </h5>
      </div>
    </div>
  );
}

export default Mail;
