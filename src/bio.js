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
      <p className="char-name">{props.character.name}</p>
      <span className="key">Height: </span>
      <span className="value">
        {`${(props.character.height / 30.48).toFixed(1)}'`}
      </span>
      <p>
        <span className="key">Mass: </span>
        <span className="value">{props.character.mass}</span>
      </p>
      <p>
        <span className="key">Hair Color: </span>
        <span className="value">{props.character.hair_color}</span>
      </p>
      <p>
        <span className="key">Eye Color: </span>
        <span className="value">{props.character.eye_color}</span>
      </p>
      <p>
        <span className="key">Birth Year: </span>
        <span className="value">{props.character.birth_year}</span>
      </p>
      <p>
        <span className="key">Gender: </span>
        <span className="value">{props.character.gender}</span>
      </p>

      <div className="buttons">
        <button className="button1" onClick={handleHomeworld}>
          See Homeworld Info
        </button>
        <p>
          <span className="key">Homeworld: </span>
          <span className="value">{homeworld.name}</span>
        </p>
        <p>
          <span className="key">Terrain: </span>
          <span className="value">{homeworld.terrain}</span>
        </p>

        <button className="button2" onClick={handleSpecies}>
          See Species Info
        </button>
      </div>
      <p>
        <span className="key">Species: </span>
        <span className="value">{species.name}</span>
      </p>
      <p>
        <span className="key">Lifespan: </span>
        <span className="value">{species.average_lifespan}</span>
      </p>
      <p>
        <span className="key">Language: </span>
        <span className="value">{species.language}</span>
      </p>
    </div>
  );
};

export default Bio;
