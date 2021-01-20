import { Star } from "@material-ui/icons";
import Checkbox from "@material-ui/core/Checkbox";
import React from "react";
import "./Mail.css";
import { useHistory } from "react-router-dom";

function Mail({ name, mailmessage, timestamp, topic }) {
  const history = useHistory();
  return (
    <div className="Mail">
      <div onClick={() => history.push("/mail")} className="mailRow">
        <Checkbox color="black" className="mailRowcheckbox" />
        <Star className="mailRowstar" />
        <h5 className="mailSender">{name}</h5>
        <div className="mailmsg">
          <h5 className="mailTopic">{topic} </h5>
          <p className="mailMessage"> - {mailmessage}</p>
        </div>
        <h5 className="mailTimestamp">{timestamp}</h5>
      </div>
    </div>
  );
}

export default Mail;
