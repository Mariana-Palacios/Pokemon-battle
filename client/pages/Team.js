const Team = (props) => {
    const {name, image, number} = props;
    return (
      <div className="App">
        <img src={image} alt={name}/>
        <h3>N.°{number}</h3>
        <h1>{name}</h1>
        
      </div>
    );
  }
  
  export default Team;