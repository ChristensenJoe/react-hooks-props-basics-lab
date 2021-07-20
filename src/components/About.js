import React from "react";
import Links from "./Links";

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {addParagraph(props.bio)}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={props.links.github} linkedin={props.links.linkedin}/>
    </div>
  );
}

function addParagraph(bio) {
  if(bio) {
    return <p>{bio}</p>
  }
  else {
    return null;
  }
}

export default About;
