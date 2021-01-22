import { Checkbox, IconButton } from "@material-ui/core";
import {
  ArrowDropDown,
  GroupRounded,
  InboxRounded,
  LocalOfferRounded,
  MoreVertRounded,
  ArrowLeftRounded,
  RefreshRounded,
  ArrowRightRounded,
} from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import Mail from "./Mail";
import "./MailsBody.css";
import db from "./firebase";
function MailsBody() {
  const [rowMessages, setrowMessages] = useState([]);
  useEffect(() => {
    db.collection("gmail")
      .doc("P4c4dxEtAc5DbVEBptd2")
      .collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setrowMessages(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            rowMessage: doc.data(),
          }))
        )
      );
  }, []);
  return (
    <div className="MailBody">
      <div className="mailbodyTop">
        <div className="topLeft">
          <div className="checkbox">
            <Checkbox color="black" className="checkboxIcon" />
            <IconButton className="HeaderIcon">
              <ArrowDropDown className="headericon" />
            </IconButton>
          </div>
          <IconButton className="HeaderIcon">
            <RefreshRounded className="headericon" />
          </IconButton>
          <IconButton className="HeaderIcon">
            <MoreVertRounded className="headericon" />
          </IconButton>
        </div>

        <div className="topRight">
          <p className="totalmsg">1-50 of 100</p>
          <IconButton className="HeaderIcon">
            <ArrowLeftRounded className="headericon" />
          </IconButton>
          <IconButton className="HeaderIcon">
            <ArrowRightRounded className="headericon" />
          </IconButton>
        </div>
      </div>
      <div className="mailsHeaders">
        <div className="mailHeaderPrimary">
          <InboxRounded className="HeaderIconPrimary " />
          <p className="mailHeaderPrimaryText">Primary</p>
        </div>
        <div className="mailHeader">
          <GroupRounded className="HeaderIconSocial" />
          <p className="mailHeaderSocialText">Social</p>
        </div>
        <div className="mailHeader">
          <LocalOfferRounded className="HeaderIconPromotions" />
          <p className="mailHeaderPromotionsText">Promotions</p>
        </div>
      </div>
      {rowMessages.map(({ id, rowMessage }) => (
        <Mail
          key={id}
          name={rowMessage.Name}
          mailmessage={rowMessage.message}
          timestamp={rowMessage.timestamp}
          topic={rowMessage.Topic}
          media={rowMessage?.media}
        />
      ))}
    </div>
  );
}

export default MailsBody;
