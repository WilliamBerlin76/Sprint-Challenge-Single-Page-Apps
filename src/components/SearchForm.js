import React, { useState, useEvent, useEffect } from "react";
import CharacterList from "./CharacterList";
export default function SearchForm(props) {
// const [displayChar, setDisplayChar] = useState([])
console.log(props)
 const [search, setSearch] = useState('')
 const [searchResult, setSearchResult] = useState([])

 console.log(props.character)
 const handleChange = event => {
   setSearch(event.target.value)
  //  console.log(search)
 }
 useEffect(() => {
  const results = props.character.filter(character => character.name.toLowerCase().includes(search));
  setSearchResult(results)
}, [search])
  return (
    <section className="search-form">
     <form>
       <input id='name' type="text" placeholder="enter name" onChange={handleChange} value={search}></input>
     </form>
     {searchResult.map(character => 
       <h1>{character.name}</h1>
     )}
     
    </section>
  );
}
