import { HashRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import NotFound from "../NotFound/NotFound";
import Profile from "../Profile/Profile";
import Notes from "../Notes/Notes";
import Exercises from "../Exercises/Exercises";
import Dishes from "../Dishes/Dishes";
import Programs from "../Programs/Programs";
import Achievements from "../Achievements/Achievements";
import Friends from "../Friends/Friends";
import Notifications from "../Notifications/Notifications";
import Settings from "../Settings/Settings";
import Friend from "../Friend/Friend";
import Program from "../Programs/Program";
import Dish from "../Dishes/Dish";
import Timetable from "../Timetable/Timetable";
import Policy from "../Policy/Policy";
import AppReview from "../AppReview/AppReview";

export function AppRoutes() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<SignIn />}/>
                <Route path="/dashboard" element={<Dashboard />}/>
                <Route path="/signup" element={<SignUp />}/>
                <Route path="/signin" element={<SignIn />}/>
                <Route path="/profile" element={<Profile />}/>
                <Route path="/notes" element={<Notes />}/>
                <Route path="/exercises" element={<Exercises />}/>
                <Route path="/dishes" element={<Dishes />}/>
                <Route path="/programs" element={<Programs />}/>
                <Route path="/achievements" element={<Achievements />}/>
                <Route path="/friends" element={<Friends />}/>
                <Route path="/notifications" element={<Notifications />}/>
                <Route path="/settings" element={<Settings />}/>
                <Route path="/friend" element={<Friend />}/>
                <Route path="/program" element={<Program />}/>
                <Route path="/dish/:id" element={<Dish />}/>
                <Route path="/timetable" element={<Timetable />}/>
                <Route path="/policy" element={<Policy />}/>
                <Route path="/appreview" element={<AppReview />}/>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </HashRouter>
    )
}