import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import { Route } from "react-router-dom";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="content transparent-overlay">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </Router>
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
