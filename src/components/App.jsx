import React from "react";
import Entry from "./Entry";
import emojipedia from './emojipedia.js'

function cCard(val)
{
  return (<Entry
   key={val.id}
   emoji={val.emoji}
   name={val.name}
   meaning={val.meaning}
  />);
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(cCard)}</dl>
    </div>
  );
}

export default App;
