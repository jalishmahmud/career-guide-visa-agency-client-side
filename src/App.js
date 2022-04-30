import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./App.css";
import About from "./Pages/About/About";
import Login from "./Pages/authentication/Login/Login";
import Career from "./Pages/Career/Career";
import Contact from "./Pages/Contact/Contact";
import Faqs from "./Pages/Faqs/Faqs";
import Home from "./Pages/Home/Home/Home";
import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy";
import Services from "./Pages/Services/Services";
import Footer from "./Pages/Shared/Footer/Footer";
import Navigation from "./Pages/Shared/Navigation/Navigation";
import StudyInAustralia from "./Pages/StudyInAustralia/StudyInAustralia";
import StudyInCanada from "./Pages/StudyInCanada/StudyInCanada";
import StudyInMalaysia from "./Pages/StudyInMalaysia/StudyInMalaysia";
import StudyInTurkey from "./Pages/StudyInTurkey/StudyInTurkey";
import StudyInUK from "./Pages/StudyInUK/StudyInUK";
import StudyInUSA from "./Pages/StudyInUsa/StudyInUSA";
import TermsAndConditions from "./Pages/TermsAndConditions/TermsAndConditions";

function App() {
  return (
    <Router>
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/study-in-usa" element={<StudyInUSA />}></Route>
        <Route path="/study-in-canada" element={<StudyInCanada />}></Route>
        <Route path="/study-in-uk" element={<StudyInUK />}></Route>
        <Route
          path="/study-in-australia"
          element={<StudyInAustralia />}
        ></Route>
        <Route path="/study-in-malaysia" element={<StudyInMalaysia />}></Route>
        <Route path="/study-in-turkey" element={<StudyInTurkey />}></Route>
        <Route path="/faqs" element={<Faqs />}></Route>
        <Route path="/career" element={<Career />}></Route>
        <Route
          path="/terms-and-conditions"
          element={<TermsAndConditions />}
        ></Route>
        <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
