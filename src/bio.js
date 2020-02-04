import React from "react";

const Bio = props => {
  const [homeworld, setHomeworld] = React.useState({});
  const [species, setSpecies] = React.useState({});

  const handleHomeworld = () => {
    fetch(props.character.homeworld)
      .then(response => response.json())
      .then(data => setHomeworld(data));
  };

  const handleSpecies = () => {
    fetch(props.character.species)
      .then(response => response.json())
      .then(data => setSpecies(data));
  };

  return (
    <div className="bio">
      <img
        src="https://lumiere-a.akamaihd.net/v1/images/the-last-jedi-theatrical-poster-tall-a_6a776211.jpeg?region=0%2C53%2C1536%2C768&width=960"
        alt={props.character.name}
      />
      <h3>{props.character.name}</h3>
      <p>Height: {props.character.height}</p>
      <p>Mass: {props.character.mass}</p>
      <p>Hair Color: {props.character.hair_color}</p>
      <p>Eye Color: {props.character.eye_color}</p>
      <p>Birth Year: {props.character.birth_year}</p>
      <p>Gender: {props.character.gender}</p>

      <div className="buttons">
        <button className="button" onClick={handleHomeworld}>
          See Homeworld Info
        </button>
        <p>Homeworld: {homeworld.name}</p>
        <p>Terrain: {homeworld.terrain}</p>

        <button className="button" onClick={handleSpecies}>
          See Species Info
        </button>
      </div>
      <p>Species: {species.name}</p>
      <p>Average Lifespan: {species.average_lifespan}</p>
      <p>Language: {species.language}</p>
    </div>
  );
};

export default Bio;
