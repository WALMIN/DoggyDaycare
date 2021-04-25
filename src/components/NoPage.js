import './NoPage.css';
import { Link } from "react-router-dom";

function Dogs(){
  return(
    <div className="NoPage">
      <h1>This page doesn't exist.</h1>
      <Link className="GoBack" to="/">Go back to Doggy Daycare.</Link>
    </div>
  );
}

export default Dogs;
