
import React from "react";
import JokeContent from "./Components/joke"

function Component(){
  return(
      <div>
          <JokeContent joke ={{punchline:"Your Mom"}} />
          <JokeContent joke ={{question:"Knock Knock Again" ,punchline:"Your Mom Again"}} />
          <JokeContent joke ={{question:"Knock Knock Again2" ,punchline:"Your Mom Again2"}} />
          <JokeContent joke ={{question:"Knock Knock Again3" ,punchline:"Your Mom Again3"}} />
          <JokeContent joke ={{question:"Knock Knock Again4" ,punchline:"Your Mom Again4"}} />
      </div>
  )
}

export default Component;
