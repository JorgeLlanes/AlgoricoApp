import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Reviews from "./components/reviews/Reviews";
import Landing from "./components/landing/Landing";
import Connect from "./components/connect/Connect";
import Restaurants from "./components/restaurants/Restaurants";
import Footer from "./components/footer/Footer";
import Friends from "./components/friends-page/Friends";
import Rest from "./components/rest-api-page/Rest";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={[
              <Nav />,
              <Landing />,
              <Reviews />,
              <Connect />,
              <Restaurants />,
              <Footer />,
            ]}
          />
          <Route path="/friends" element={[<Nav />, <Friends />]} />
          <Route path="/rest" element={[<Nav />, <Rest />]} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
