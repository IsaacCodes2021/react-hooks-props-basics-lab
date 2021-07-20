import React from "react";
import Links from "./Links";

function About(props) {
  let x;
    if (props.bio) {
      x = <p>{props.bio}</p>
    }
    else {
       x=null
    }

    return (
      <div id="about">
        <h2>About Me</h2>
        {x}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links />
      </div>
    );
}

export default About;
