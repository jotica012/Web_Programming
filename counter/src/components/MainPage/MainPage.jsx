import { useState } from 'react'
import './MainPage.css'
export default function MainPage(){
    const [counter, setCount] = useState(0)
    function add(){
        setCount(counter+1);
    }
    function subs(){
        setCount(counter-1);
    }


    return(
        <div className='displaybtn'>
            <button onClick = {() =>{
                subs()
            }} > - </button>
            {counter}
            <button onClick = {() =>{
                add()
            }}> + </button>

        </div>

    )
}