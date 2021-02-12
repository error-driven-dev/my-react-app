import React, {useEffect} from "react";

export const CounterMessage = ({count}) => {

    return count > 58 ?
        <> 
        <h1>Congratulations!</h1>
        <p>You have won a brand new life!</p>
        </> : null;
 


}