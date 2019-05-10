import React from "react"
//import "./scoreboard.css"

const ScoreBoard= props =>(
    <div className="col-12 scoreboard">
    <p>
        score: {props.currScore} top scorer:{props.topScorer}
    </p>
    </div>
)
export default ScoreBoard