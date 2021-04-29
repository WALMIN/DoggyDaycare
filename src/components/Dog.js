import './Dog.css';
import { useParams } from "react-router-dom";
import { FetchData } from "../data/FetchData";

const Dog = (props) => {
  let { chipNumber } = useParams();
  const { data } = FetchData("https://api.jsonbin.io/b/608820de5210f622be3b3ec6");

  return(
    <div className="Dog">
      {
        (data.length > 0) ?
          data
            .filter((dog) => {
              if(dog.chipNumber.toLowerCase() === chipNumber.toLowerCase()){
                return dog

              } else {
                return null

              }

            })
            .map((dog, key)=> (
              <main key={key}>
                <div>
                  <img className="DogImage" src={dog.img} alt="dog" />
                  <h1>{dog.name}</h1>
                </div>

                <div className="DogInfo">
                  <div className="Item">
                    <p className="Title">Sex</p>
                    <div className="Content">
                      <p>{dog.sex}</p>
                      <img src={dog.sex === "female" ? (process.env.PUBLIC_URL + "/images/female.svg") : (process.env.PUBLIC_URL + "/images/male.svg")} alt="sex" />
                    </div>
                  </div>

                  <div className="Item">
                    <a href={"https://www.petfinder.com/dog-breeds/" + dog.breed} target="_blank" rel="noopener noreferrer">
                      <p className="Title">Breed</p>
                      <div className="Content">
                        <p>{dog.breed}</p>
                        <img src={process.env.PUBLIC_URL + "/images/help.svg"} alt="help" />
                      </div>
                    </a>
                  </div>

                  <div className="Item">
                    <p className="Title">Age</p>
                    <p>{dog.age} {dog.age > 1 ? "years" : "year"}</p>
                  </div>

                  <div className="Item" style={{ background: dog.present === true ? "#CCD4BF" : "#EEBAB2" }}>
                    <p className="Title">Present</p>
                    <p>{dog.present === true ? "Yes" : "No"}</p>
                  </div>

                </div>

                <div className="OwnerInfo">
                  <div className="Content">
                    <img src={process.env.PUBLIC_URL + "/images/owner.svg"} alt="owner" />
                    <div>
                      <p className="Title">{dog.owner.name} {dog.owner.lastName}</p>
                      <p className="Text">{dog.owner.phoneNumber}</p>
                    </div>
                    <a href={"tel:" + dog.owner.phoneNumber}>
                      <img className="Call" src={process.env.PUBLIC_URL + "/images/phone.svg"} alt="phone" />
                    </a>
                  </div>
                </div>

                <p className="DogChip">Chip number: {dog.chipNumber}</p>
              </main>
            ))
          :
          <div className="Loading">
            <img src={process.env.PUBLIC_URL + "/images/breed.svg"} className="LoadingLogo" alt="logo" />
            <p className="LoadingTitle">Loading dog...</p>
          </div>
        }
    </div>
  )
}

export default Dog;
