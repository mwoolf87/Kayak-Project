import "./App.css";
import Airlines from "./components/Airlines";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Airlines />
    </div>
  );
}

export default App;
// Airline information is available via a jsonp API:
// URL: 'kayak.com/h/mobileapis/directory/airlines/homework'
// callback parameter name: 'jsonp'

// The alliance field in the JSON objects returned from the API should be used
// for the Alliance filter shown in the mock ups. The alliance codes map to the
// following values:
// ST = “Sky Team”
// OW = “Oneworld”
// SA = “Star Alliance”
