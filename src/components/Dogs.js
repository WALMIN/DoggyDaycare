import './Dogs.css';
import { useState } from 'react';
import DogsData from "../data/dogs.json";
import {Link} from "react-router-dom";

function Dogs(){
  const [search, setSearch] = useState("");

  return(
    <div className="Dogs">
      <input type="search" placeholder="Search by name or owner..." onChange={event => { setSearch(event.target.value) }} />
      <main>
        {DogsData.filter((dog) => {
            if(search == ""){
              return dog

            }else if(dog.name.toLowerCase().includes(search.toLowerCase()) ||
            dog.owner.name.toLowerCase().includes(search.toLowerCase()) ||
            dog.owner.lastName.toLowerCase().includes(search.toLowerCase())){
              return dog

            }

          }).map((dog, key)=> (
            <Link className="DogItem" key={key} to={{pathname: "/dog", dog: { data: dog }}}>
              <img src={dog.img} />
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
