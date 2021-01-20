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
      <div className="BodyItems">
        <Router>
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
        </Router>
      </div>
      {sendMsgIsOpen && <SendMail />}
    </div>
  );
}

export default Body;
