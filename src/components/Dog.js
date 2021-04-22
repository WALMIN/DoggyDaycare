import './Dog.css';
import { useState } from 'react';

const Dog = (props) => {
  const [data, setData] = useState(props.location.dog.data);

  return(
    <div className="Dog">

      <main>
        <img className="DogImage" src={data.img} />

        <h1>{data.name}</h1>

        <div className="DogInfo">
          <div className="Item">
            <p className="Title">Sex</p>
            <div className="Content">
              <p>{data.sex}</p>
              <img src={data.sex == "female" ? "images/female.svg" : "images/male.svg"} />
            </div>
          </div>

          <div className="Item">
            <a href={"https://www.petfinder.com/dog-breeds/" + data.breed} target="_blank">
              <p className="Title">Breed</p>
              <div className="Content">
                <p>{data.breed}</p>
                <img src="images/help.svg" />
              </div>
            </a>
          </div>

          <div className="Item">
            <p className="Title">Age</p>
            <p>{data.age} {data.age > 1 ? "years" : "year"}</p>
          </div>

          <div className="Item" style={{ background: data.present == true ? "#CCD4BF" : "#EEBAB2" }}>
            <p className="Title">Present</p>
            <p>{data.present == true ? "Yes" : "No"}</p>
          </div>

        </div>

        <div className="OwnerInfo">
          <div className="Content">
            <img src="images/owner.svg" />
            <div>
              <p className="Title">{data.owner.name} {data.owner.lastName}</p>
              <p className="Text">{data.owner.phoneNumber}</p>
            </div>
            <a href={"tel:" + data.owner.phoneNumber}>
            <img className="Call" src="images/phone.svg" />
            </a>
          </div>
        </div>

        <p className="DogChip">Chip number: {data.chipNumber}</p>
      </main>
    </div>
  )
}

export default Dog;
