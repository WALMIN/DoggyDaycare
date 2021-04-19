import './Dogs.css';
import DogsData from ".././data/dogs.json";

const Dogs = () => (
    <div className="Dogs">
      <main>
        {
          DogsData.map(dog => (
            <button className="DogItem" onClick={ console.log("Yeah") }>
              <img src={dog.img } />
              <div>
                <p className="title">{dog.name}</p>
                <p>{dog.owner.name}<br />{dog.owner.lastName}</p>
              </div>
            </button>
          ))
        }
      </main>
    </div>
)

export default Dogs;
