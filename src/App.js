import "././Pages/Homepage/home.css";
import "./App.css";
import "./form_chat.css";
// import HomePage from "./Pages/Homepage/Homepage";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCheckSquare,
  faCoffee,
  faLifeRing,
  faShieldHalved,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import AuthState from "./Context/AuthState";
import HomeScreen from "./HomeScreen";
library.add(
  fab,
  faCheckSquare,
  faCoffee,
  faShieldHalved,
  faTruckFast,
  faLifeRing
);

function App() {
  // className="App bg-body-tertiary"

  return (
    <AuthState>
      <HomeScreen />
    </AuthState>
  );
}
export default App;
