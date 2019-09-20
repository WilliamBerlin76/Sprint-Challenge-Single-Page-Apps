import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from './CharacterCard'
export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([])
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
    .get(`https://rickandmortyapi.com/api/character/`)
    .then( response => {
      const people = response.data.results
      console.log(response)
      setCharacter(people)
    })
    .catch(error => {
      console.log('no response', error)
    })
  }, []);

  return (
    <section className="character-list">
      <div>
        {character.map(item => {
          return <CharacterCard key={item} name={item.name}/>
        })}
      </div>
    </section>
  );
}

