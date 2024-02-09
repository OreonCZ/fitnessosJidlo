import { Divider, Grid } from "@mui/material";
import { Link } from "react-router-dom";

export function MainPage() {
  return (
    <>
      <Grid container spacing={2} flexDirection={"column"}>
        <Grid item>
          <Link to={"/dashboard"}>Dash</Link>
        </Grid>
        <Grid item>
        <Link to={"/signin"}>Signin</Link>
        </Grid>
        <Grid item>
        <Link to={"/signup"}>Signup</Link>
        </Grid>
        <Grid item>
        <Link to={"/profile"}>Profile</Link>
        </Grid>
        <Grid item>
        <Link to={"/notes"}>Notes</Link>
        </Grid>
        <Grid item>
        <Link to={"/exercises"}>Exercises</Link>
        </Grid>
        <Grid item>
        <Link to={"/dishes"}>Dishes</Link>
        </Grid>
        <Grid item>
        <Link to={"/programs"}>Programs</Link>
        </Grid>
        <Grid item>
        <Link to={"/achievements"}>Achievements</Link>
        </Grid>
        <Grid item>
        <Link to={"/friends"}>Friends</Link>
        </Grid>
        <Grid item>
        <Link to={"/notifications"}>Notifications</Link>
        </Grid>
        <Grid item>
        <Link to={"/settings"}>Settings</Link>
        </Grid>
        <Grid item>
        <Link to={"/timetable"}>Timetable</Link>
        </Grid>
      </Grid>
    </>
  );
}
