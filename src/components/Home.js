import './Home.css';
import {Link} from "react-router-dom";

function Home(){
  return(
    <div className="Home" style={{backgroundImage: `url("images/background.jpg")`}}>
      <main>
        <h1 className="Title">Welcome!</h1>
        <p className="Text">Doggy Daycare helps you keep track<br />of all the dogs at your place.</p>
        <div>
          <Link className="Button" to="/register">See all the dogs</Link>
          <Link className="Button2" to="/">More info</Link>
        </div>
      </main>
      <footer>
        Photo by <a href="https://unsplash.com/@alvannee?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Alvan Nee</a> on <a href="https://unsplash.com/s/photos/dogs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
      </footer>
    </div>
  );
}

export default Home;
