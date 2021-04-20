import {Link} from "react-router-dom";

function Home(){
  return(
    <div>
      <Link className="NavigationButton" to="/register">Dog register</Link>
    </div>
  );
}

export default Home;
