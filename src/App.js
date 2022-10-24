import { ReactComponent as Logo } from "./assets/images/logo.svg";
import "./App.css";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Users from "./Pages/Users.jsx";
import News from "./Pages/News.jsx";
import Trending from "./Pages/Trending.jsx";
import PageNotFound from "./Pages/PageNotFound.jsx";

function App() {
  return (
    <div className="App">
      <nav>
        <Logo className="logo" />
        <ul>
          <li>
            <Link to="/">Home</Link>
            <Link to="/Users">Users</Link>
            <Link to="/News">New</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/news" element={<News />}>
          <Route path="trending" element={<Trending />} />
        </Route>
        <Route path="/page-not-found" element={<PageNotFound />} />
        <Route path="*" element={<Navigate to="/page-not-found" />} />
      </Routes>
    </div>
  );
}

export default App;
