import React, { useState } from "react";
import CharacterList from "./CharacterList";
export default function SearchForm(props) {
// const [displayChar, setDisplayChar] = useState([])
console.log(props)
 const [search, setSearch] = useState('')

 const handleChange = event => {
   setSearch(event.target.value)
   console.log(search)
 }
  return (
    <section className="search-form">
     <form>
       <input id='name' type="text" placeholder="enter name" onChange={handleChange}></input>
     </form>
    </section>
  );
}
