import { Route, Routes } from "react-router-dom";

import "./App.css";
import LandingPage from "./pages/landing-page/LandingPage";
import Home from "./pages/home/Home";
import NewBlog from "./pages/new-blog/NewBlog";

import ProfilePage from "./pages/profile-page/ProfilePage";
import PrivateComponent from "./hoc/PrivateComponent";
import UpdateBlog from "./pages/update-blog/UpdateBlog";
import UserProfileIncomplete from "./pages/userprofileincomplete/UserProfileIncomplete";
import UserProfile from "./pages/user-profile/UserProfile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LandingPage />} />
        <Route path="/*" element={<PrivateComponent element={<Home />} />} />
        <Route
          path="/newblog"
          element={<PrivateComponent element={<NewBlog />} />}
        />
        <Route
          element={<PrivateComponent element={<ProfilePage />} />}
          path="/profile"
        />
        <Route
          element={<PrivateComponent element={<UpdateBlog />} />}
          path="/edit/:userId/:blogId"
        />
        <Route
          element={<PrivateComponent element={<UserProfileIncomplete />} />}
          path="/userprofilenotcompleted"
        />
        <Route element={<UserProfile />} path="/user/:uid" />
        <Route element={<h2>Unkown page</h2>} path="*" />
      </Routes>
    </div>
  );
}

export default App;
