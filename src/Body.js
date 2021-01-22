import React from "react";
import MailsBody from "./MailsBody";
import SideBar from "./SideBar";
import "./Body.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MailComponent from "./MailComponent";
import SendMail from "./SendMail";
import { useSelector } from "react-redux";
import { selectsendmsgisopen } from "./features/mailSlice";

function Body() {
  const sendMsgIsOpen = useSelector(selectsendmsgisopen);
  return (
    <div className="body">
      <Router>
        <div className="BodyItems">
          <SideBar />
          <Switch>
            <Route path="/mails">
              <div className="rightSidebar">
                <MailsBody />
              </div>
            </Route>
            <Route path="/mail">
              <MailComponent />
            </Route>

            <Route path="/">
              <MailsBody />
            </Route>
          </Switch>
        </div>
      </Router>

      {sendMsgIsOpen && <SendMail />}
    </div>
  );
}

export default Body;
