import './Dogs.css';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { FetchData } from "../FetchData";

function Dogs(){
  const [ search, setSearch ] = useState("");
  const { data, dataLoading } = FetchData("https://api.jsonbin.io/b/607eb43024143e5df089b745");

  return(
    <div className="Dogs">
      <input type="search" placeholder="Search by name or owner..." onChange={event => { setSearch(event.target.value) }} />
      <main>
        {dataLoading ?
          <div>
            <img src="images/breed.svg" className="LoadingLogo" alt="logo" />
            <p className="LoadingTitle">Loading...</p>
          </div>
          :
          data.filter((dog) => {
              if(search === ""){
                return dog

              }else if(dog.name.toLowerCase().includes(search.toLowerCase()) ||
              dog.owner.name.toLowerCase().includes(search.toLowerCase()) ||
              dog.owner.lastName.toLowerCase().includes(search.toLowerCase())){
                return dog

              } else {
                return null

              }

            })
            .map((dog, key) => (
              <Link className="DogItem" to={"/dog/" + dog.chipNumber} key={key}>
                <img src={dog.img} alt="dog" style={{borderColor: dog.present === true ? "#CCD4BF" : "#EEBAB2"}} />
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
