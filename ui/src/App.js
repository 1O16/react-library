import "./App.css";
// Webpack CSS import
// import "onsenui/css/onsenui.css";
// import "onsenui/css/onsen-css-components.css";
import OnsenUIExample from "./Components/OnsenUI/OnsenUIExample";

import "bootstrap/dist/css/bootstrap.min.css";
import ReactBootstrapExample from "./Components/ReactBootstrap/ReactBootstrapExample";
import MaterialUIExample from "./Components/MaterialUI/MaterialUIExample";
import TailwindExample from "./Components/Tailwindcss/Example";
import ReactSpringExample from "./Components/ReactSpring/Example";
import FramerMotionExample from "./Components/FramerMotion/Example";

function App() {
  return (
    <div className="App">
      {/* <ReactSpringExample /> */}
      {/* <TailwindExample /> */}
      {/* <OnsenUIExample /> */}
      {/* <ReactBootstrapExample /> */}
      {/* <MaterialUIExample /> */}
      <FramerMotionExample />
    </div>
  );
}

export default App;
