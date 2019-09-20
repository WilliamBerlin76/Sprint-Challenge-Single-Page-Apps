import React, { useState } from "react";
import CharacterList from "./CharacterList";
export default function SearchForm(props) {
// const [displayChar, setDisplayChar] = useState([])
console.log(props)
 const [name, setName] = useState({
   name: ''
 })
 const handleChange = event => {
   setName({...name, [event.target.name]: event.target.value})
   props.filterNames(name)
   console.log(name)
 }
  return (
    <section className="search-form">
     <form>
       <input type="searcn" placeholder="enter name" onChange={handleChange}></input>
     </form>
    </section>
  );
}
