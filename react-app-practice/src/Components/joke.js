import React from "react"

function JokeContent(props){
    return(
        <div className="JokeContent">
            
            <h1 style={{display: props.joke.question ? "block" : "none"}}>{props.joke.question}</h1>
            
            <h1>{props.joke.punchline}</h1>
            <hr />
        </div>
    )
}

export default JokeContent