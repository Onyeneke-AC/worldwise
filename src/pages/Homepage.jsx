import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Homepage() {
  return (
    <div>
      <Navbar />
      <h1>Worldwise</h1>

      <Link to="/app">Go to the app</Link>
    </div>
  );
}

export default Homepage;
