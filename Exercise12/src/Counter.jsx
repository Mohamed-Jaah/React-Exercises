import {useState} from 'react'
const Counter = () => {

    const [count, setCount] = useState(0)

    const counterIncrement = () => setCount(count +1)
        
    

    const counterDecrement = () => {
        if (count > 0){
            setCount (count - 1)
        }
    }

    return(
        <>
        
            <h1>Here is : {count} </h1>
            <button  onClick={counterIncrement} >Incerement</button>
            <button disabled={count === 0} onClick={counterDecrement} >Decrement</button>

            <h3>Output is : {count}</h3>

        </>
    )
}

export default Counter;