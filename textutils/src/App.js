import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const togleMode = () => {
    if (mode === 'light') {
      setMode("dark");
      document.body.style.backgroundColor = '#191919';
      showAlert("Dark Mode Has Been Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Has Been Enabled", "success");
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={togleMode} />
        <Alert alert={alert} />
        <div className="container my-3 ">
          <Routes>
            <Route exact path="/" element={<TextForm heading="Enter Your Text To Analyze" mode={mode} showAlert={showAlert} />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
