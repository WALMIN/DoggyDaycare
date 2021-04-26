import './Dogs.css';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { FetchData } from "../FetchData";

function Dogs(){
  const [ search, setSearch ] = useState("");
  const [ sort, setSort ] = useState("present");
  const [ sortAscending, setSortAscending ] = useState(true);
  const [ sortAscendingText, setSortAscendingText ] = useState("↓");
  const { data, dataLoading } = FetchData("https://raw.githubusercontent.com/WALMIN/DoggyDaycare/master/src/data/dogs.json");

  const getSort = (c, sort) => {
    switch(sort) {
      case "age": return c.age;
      case "breed": return c.breed;
      case "owner": return c.owner.name;
      case "sex": return c.sex;
      case "present": return c.present;

      default: return c.present;

    }

  }

  return(
    <div className="Dogs">
      <input type="search" placeholder="Search by name or owner..." onChange={event => { setSearch(event.target.value) }} />
      <div className="Sort">
        <p>Sort:</p>
        <button className="SortAscending" onClick={() => { setSortAscending(!sortAscending); setSortAscendingText(sortAscending ? "↑" : "↓"); }}>{sortAscendingText}</button>
        <button className={("age" === sort) ? 'SortButtonCurrent' : 'SortButton'} onClick={() => setSort("age")}>Age</button>
        <button className={("breed" === sort) ? 'SortButtonCurrent' : 'SortButton'} onClick={() => setSort("breed")}>Breed</button>
        <button className={("owner" === sort) ? 'SortButtonCurrent' : 'SortButton'} onClick={() => setSort("owner")}>Owner</button>
        <button className={("sex" === sort) ? 'SortButtonCurrent' : 'SortButton'} onClick={() => setSort("sex")}>Sex</button>
        <button className={("present" === sort) ? 'SortButtonCurrent' : 'SortButton'} onClick={() => setSort("present")}>Present</button>
      </div>
      <hr />
      <main>
        {dataLoading ?
          <div>
            <img src="images/breed.svg" className="LoadingLogo" alt="logo" />
            <p className="LoadingTitle">Loading...</p>
          </div>
          : data
            .sort((a, b) => (a.name > b.name) ? 1 : -1)
            .sort((a, b) => (getSort(a, sort) > getSort(b, sort)) ? (sortAscending ? -1 : 1) : (sortAscending ? 1 : -1))
            .filter((dog) => {
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
