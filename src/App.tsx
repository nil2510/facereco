import { useState } from "react";
import NavBar from "./components/NavBar";
import Help from "./components/Help";
import Contact from "./components/Contact";
import About from "./components/About";
import Register from "./components/Register";
import ResponseModel from "./components/ResponseModel";
import { Button } from "react-bootstrap";
import PhotoCapture from "./components/PhotoCapture";
import axios from "axios";

function App() {
  const [HelpVisible, setHelpVisible] = useState(false);
  const [ContactVisible, setContactVisible] = useState(false);
  const [AboutVisible, setAboutVisible] = useState(false);
  // const [selectedIndex, setSelectedIndex] = useState(-1);

  const [FormVisible, setFormVisible] = useState(false);

  const [CaptureVisible, setCaptureVisible] = useState(false);

  const [ResponseVisible, setResponseVisible] = useState(false);
  const [Response, setResponse] = useState("");
  const [ResponseName, setResponseName] = useState("");

  let navItems = ["Help", "Contact", "About"];
  const handleSelectNavItem = (navItem: number) => {
    if (navItem == 0) {
      setHelpVisible(true);
      setContactVisible(false);
      setAboutVisible(false);
    }
    if (navItem == 1) {
      setHelpVisible(false);
      setContactVisible(true);
      setAboutVisible(false);
    }
    if (navItem == 2) {
      setHelpVisible(false);
      setContactVisible(false);
      setAboutVisible(true);
    }
  };

  const handleCapture = (imageSrc: string) => {
    setCaptureVisible(false);
    const jsonData = {
      image: imageSrc,
    };

    axios.post("http://localhost:5000/recognise", jsonData).then((res) => {
      setResponse(res.data.message);
      setResponseName(res.data.name);
      setResponseVisible(true);
    });
  };

  const handleCloseRegister = (response: string) => {
    setFormVisible(false);
    setResponse(response);
    setResponseName("unknown");
    setResponseVisible(true);
  };
  const handleCancelRegister = () => {
    setFormVisible(false);
  };
  
  const handleRegister = () => {
    
    setFormVisible(true)
  };
  

  return (
    <>
      <div
        className="d-flex flex-column justify-content-between"
        style={{ height: "100vh" }}
      >
        <div>
          <NavBar
            heading="FaceReco"
            navItems={navItems}
            onClickHome={handleCancelRegister}
            onSelectNavItem={handleSelectNavItem}
          />
        </div>
        {!FormVisible && (
          <div className="d-flex justify-content-end align-items-center flex-grow-1 px-5">
            <div className="">
              <Button
                variant="outline-dark"
                className="px-3"
                onClick={handleRegister}
              >
                Register yourself
              </Button>
            </div>
          </div>
        )}

        {FormVisible && (
          <div className="flex-grow-1 p-3">
            <Register onCancel={handleCancelRegister} onCloseForm={handleCloseRegister} />
          </div>
        )}

        {!FormVisible && (
          <div className="d-flex justify-content-center align-items-center flex-grow-1">
            <div>
              <Button
                variant="dark"
                className="rounded-pill px-5"
                onClick={() => {
                  setCaptureVisible(true);
                }}
              >
                Mark Your Attendance
              </Button>
            </div>
          </div>
        )}
      </div>

      {CaptureVisible && <PhotoCapture onCapture={handleCapture} />}

      {ResponseVisible && (
        <ResponseModel
          response={Response}
          responseName={ResponseName}
          onCloseResponse={() => setResponseVisible(false)}
        />
      )}

      {HelpVisible && <Help onCloseHelp={() => setHelpVisible(false)} />}
      {ContactVisible && (
        <Contact onCloseContact={() => setContactVisible(false)} />
      )}
      {AboutVisible && <About onCloseAbout={() => setAboutVisible(false)} />}
    </>
  );
}

export default App;
