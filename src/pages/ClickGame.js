import react from 'react';
import {CounterButton} from '../CounterButton';

export const ClickGame= () => {
    return  <> 
    <h1>Click Game</h1>
   <CounterButton initcount={55}></CounterButton>
   </>
}