import { useState } from 'react';

const Dog = (props) => {
  const [data, setData] = useState(props.location.dog.data);

  return(
    <div className="Dog">
      <h1>{data.name}</h1>
      <img src={data.img} />
      <p>{data.owner.name} {data.owner.lastName}</p>
    </div>
  )
}

export default Dog;
