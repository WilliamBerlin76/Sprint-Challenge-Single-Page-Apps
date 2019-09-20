import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([{
    name: ''
  }]);
  // useEffect(() => {
  //   const filterNames = character.filter(char => char.toLowerCase().includes(setSearch));
  //   setCharacter(filterNames)
  // }, [setSearch])
  // const filterNames = char => {
  //   const nameFilter = {
  //     // name: char.filter(name => {
  //     //   name.includes({char})
  //     name: char.name
  //   }
  //   setCharacter([...character, nameFilter])
  // }
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
    .get(`https://rickandmortyapi.com/api/character/`)
    .then( response => {
      const people = response.data.results
      // console.log(response)
      setCharacter(people)
    })
    .catch(error => {
      console.log('no response', error)
    })
  }, []);

  return (
    <section className="character-list">
      
      <div>
      <SearchForm character={character}/>
        {character.map(item => {
          return <CharacterCard key={item.id} name={item.name}/>
        })}
      </div>
    </section>
  );
}

