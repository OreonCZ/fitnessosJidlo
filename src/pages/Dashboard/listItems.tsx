import bell from "../../assets/Bell.svg";
import bowl from "../../assets/Bowl.svg";
import calendar from "../../assets/Calendar.svg";
import friends from "../../assets/Friends.svg";
import notes from "../../assets/Note.svg";
import run from "../../assets/Run.svg";
import stats from "../../assets/Stats.svg";
import weight from "../../assets/Weight.svg";
import settings from "../../assets/Settings.svg";
import logout from "../../assets/Logout.svg";
import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";

export const ListItems = (props: any): JSX.Element => {
  return (
    <React.Fragment>
      <Link style={{textDecoration : "none", color : "black"}} to={"/notes"}>
      <ListItemButton>
        <ListItemIcon>
          <img src={notes} alt="" className="icon" />
        </ListItemIcon>
        <ListItemText primary="Notes" />
      </ListItemButton>
      </Link>
      <Link style={{textDecoration : "none", color : "black"}} to={"/timetable"}>
      <ListItemButton>
        <ListItemIcon>
          <img src={calendar} alt="" className="icon" />
        </ListItemIcon>
        <ListItemText primary="Timetable" />
      </ListItemButton>
      </Link>
      <Link style={{textDecoration : "none", color : "black"}} to={"/exercises"}>
      <ListItemButton>
        <ListItemIcon>
          <img
            src={run}
            alt=""
            className="icon"
          />
        </ListItemIcon>
        <ListItemText primary="Exercises" />
      </ListItemButton>
      </Link>
      <Link style={{textDecoration : "none", color : "black"}} to={"/dishes"}>
      <ListItemButton>
        <ListItemIcon>
          <img
            src={bowl}
            alt=""
            className="icon"
          />
        </ListItemIcon>
        <ListItemText primary="Dishes" />
      </ListItemButton>
      </Link>
      <Link style={{textDecoration : "none", color : "black"}} to={"/programs"}>
      <ListItemButton>
        <ListItemIcon>
          <img
            src={weight}
            alt=""
            className="icon"
          />
        </ListItemIcon>
        <ListItemText primary="Programs" />
      </ListItemButton>
      </Link>
    </React.Fragment>
  );
};

export const SecondaryListItems = (props: any): JSX.Element => {
  return (
    <React.Fragment>
      <Link style={{textDecoration : "none", color : "black"}} to={"/achievements"}>
      <ListItemButton>
        <ListItemIcon>
          <img
            src={stats}
            alt=""
          />
        </ListItemIcon>
        <ListItemText primary="Achievements" />
      </ListItemButton>
      </Link>
      <Link style={{textDecoration : "none", color : "black"}} to={"/friends"}>
      <ListItemButton>
        <ListItemIcon>
          <img
            src={friends}
            alt=""
          />
        </ListItemIcon>
        <ListItemText primary="Friends" />
      </ListItemButton>
      </Link>
      <Link style={{textDecoration : "none", color : "black"}} to={"/notifications"}>
      <ListItemButton>
        <ListItemIcon>
          <img
            src={bell}
            alt=""
          />
        </ListItemIcon>
        <ListItemText primary="Notificatons" />
      </ListItemButton>
      </Link>
    </React.Fragment>
  );
};

export const BottomListItems = (props: any): JSX.Element => {
  return (
    <React.Fragment>
      <Link style={{textDecoration : "none", color : "black"}} to={"/settings"}>
      <ListItemButton>
        <ListItemIcon>
          <img src={settings} alt="" className="icon" />
        </ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItemButton>
      </Link>
      <Link style={{textDecoration : "none", color : "red"}} to={"/"}>
        <ListItemButton>
          <ListItemIcon>
            <img src={logout} alt="" className="icon" />
          </ListItemIcon>
          <ListItemText primary="Log out" />
        </ListItemButton>
      </Link>
    </React.Fragment>
  );
};
