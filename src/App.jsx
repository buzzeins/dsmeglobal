import React from "react";
import { withStyles } from "react-critical-css";
import { Route, Routes } from "react-router";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./screens/About";
import Home from "./screens/Home";
import stylesheet from "./App.scss";
import MeetUs from "./screens/MeetUs";
import NotFound from "./screens/NotFound";

// topbar.config({
//   autoRun: false,
//   barThickness: 3,
//   barColors: {
//     0: "#2ecc82",
//     0.3: "#2ecc82",
//     1.0: "#2ecc82",
//   },
//   shadowBlur: 5,
//   shadowColor: "transparent",
//   className: "topbar",
// });

function App() {
  const [isHeader, setIsHeader] = React.useState(true);
  const [isContact, setIsContact] = React.useState(true);
  const [isFooter, setIsFooter] = React.useState(true);
  return (
    <>
      {isHeader ? <Header /> : null}
      <Routes maxLoadingTime={500}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/meet-us" element={<MeetUs />} />
        <Route
          path="*"
          element={
            <NotFound
              setIsHeader={setIsHeader}
              setIsContact={setIsContact}
              setIsFooter={setIsFooter}
            />
          }
        />
      </Routes>
      {isContact ? <Contact /> : null}
      {isFooter ? <Footer /> : null}
    </>
  );
}
export default withStyles(stylesheet)(App);
