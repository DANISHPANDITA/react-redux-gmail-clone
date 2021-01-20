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
import React from "react";
import Mail from "./Mail";
import "./MailsBody.css";
function MailsBody() {
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
      <Mail
        name="Danish Pandita"
        mailmessage="The message is as good as it should be"
        timestamp="7:15 A.M"
        topic="New message topic here"
      />
      <Mail
        name="Danish Pandita"
        mailmessage="The message is as good as it should be"
        timestamp="7:15 A.M"
        topic="New message topic here"
      />
    </div>
  );
}

export default MailsBody;
