import React from 'react';
import { riders } from "../../Data/Riders";

console.log(riders);

function ProRiders(Riders) {
  console.log(Riders.name);
  return (
    <div>
      <h1>Pro Riders</h1>
    </div>
  );
}

export default ProRiders;
