import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProjectDetails from "./pages/ProjectDetails";
import Projects from "./pages/Projects";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import axios from "axios";
import { useEffect, useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://myportfolio-5nnx.onrender.com/")
      .then((response) => setData(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <div className=" app d-flex flex-column min-vh-100">
        <Router>
          <header>
            <Navbar />
          </header>
          <ScrollToTop />

          <div className="content transparent-overlay flex-grow-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/project/:id" element={<ProjectDetails />} />
            </Routes>
          </div>
        </Router>
        <Footer />
      </div>
    </>
  );
}

export default App;

// function App() {
//   const [alertVisible, setAlertVisibility] = useState(false);
//   return (
//     <>
//       <div>
//         <Navbar />
//       </div>
//       <div>
//         {alertVisible && (
//           <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>
//         )}
//         <Button color="primary" onClick={() => setAlertVisibility(true)}>
//           My Button
//         </Button>
//       </div>
//     </>
//   );
// }

// export default App;

// import ListGroup from "./components/ListGroup";

// function App() {
//   const items = [
//     "New York",
//     "San Francisco",
//     "Los Angeles",
//     "Chicago",
//     "Miami",
//   ];

//   const handleSelectItem = (item: string) => {
//     console.log(item);
//   };

//   return (
//     <div>
//       <ListGroup
//         items={items}
//         heading="Cities"
//         onSelectItem={handleSelectItem}
//       />
//     </div>
//   );
// }

// export default App;
