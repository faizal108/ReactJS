import React from "react";

export default function Functionalprops ({name, place}) { //Instead of passing props you can pass actual paramemter
  return <>
    <h1>This is functinal Components</h1>
    <h1>welcome {name} from place {place}! to my react app..</h1>
  </>;
}
