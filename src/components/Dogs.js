import './Dogs.css';
import { useState, useEffect } from 'react';
import {Link} from "react-router-dom";

function Dogs(){
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  useEffect(()=>{
    fetch('https://api.jsonbin.io/b/607eb43024143e5df089b745')
      .then(function (response) {
        return response.json();

      })
      .then(function (data) {
        setData(data);

      })
      .catch(function (error) {
        console.log(error);

      });

  }, [])

  return(
    <div className="Dogs">
      <input type="search" placeholder="Search by name or owner..." onChange={event => { setSearch(event.target.value) }} />
      <main>
        {data && data.length === 0 && (
          <div>
            <img src="images/breed.svg" className="LoadingLogo" alt="logo" />
            <p className="LoadingTitle">Loading...</p>
          </div>

        )}

        {data.filter((dog) => {
            if(search == ""){
              return dog

            }else if(dog.name.toLowerCase().includes(search.toLowerCase()) ||
            dog.owner.name.toLowerCase().includes(search.toLowerCase()) ||
            dog.owner.lastName.toLowerCase().includes(search.toLowerCase())){
              return dog

            }

          })
          .map((dog, key)=> (
            <Link className="DogItem" key={key} to={{pathname: "/dog", dog: { data: dog }}}>
              <img src={dog.img} style={{borderColor: dog.present == true ? "#CCD4BF" : "#EEBAB2"}} />
              <div>
                <p className="title">{dog.name}</p>
                <p>{dog.owner.name}<br />{dog.owner.lastName}</p>
              </div>
            </Link>
          ))
        }
      </main>
    </div>
  );
}

export default Dogs;
