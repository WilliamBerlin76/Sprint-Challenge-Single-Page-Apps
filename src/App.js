import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import styled from "styled-components"
import { Route, Link } from 'react-router-dom';
import WelcomePage from "./components/WelcomePage.js";

export default function App() {

  const Links = styled.div`
    text-align: center;
    display: flex;
    justify-content: space-evenly
  `
  return (
    <main>
      <Header />
      <Links>
        <Link to={'/'}>Home</Link>
        <Link to={'/CharacterList'}>See Characters</Link>
      </Links>
      <Route exact path='/' component={WelcomePage}/>
      <Route path='/CharacterList' component={CharacterList} />
    </main>
  );
}
