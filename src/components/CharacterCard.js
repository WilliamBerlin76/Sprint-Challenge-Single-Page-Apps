import React from "react";

export default function CharacterCard(props) {
  return(
    <div key={props.id}>
      <div key={props.name}>{props.name}</div>
    </div>
  );
}
