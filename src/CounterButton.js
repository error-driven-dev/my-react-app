import  React, {useState}  from 'react';
import {CounterMessage} from './counterMessage';

export const CounterButton = ({ initcount}) => {
    const [count, setCount] = useState(initcount);
    const incrementCount = () => setCount(count + 1);
    console.log('CounterButton')
    return ( <>
    <p>You have clicked me { count} times. </p>
    <button onClick={incrementCount}>Click Me</button>


    <CounterMessage count={count}></CounterMessage>
    </>
    )
}