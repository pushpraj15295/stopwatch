import React, { useState }  from 'react'



const Stopwatch = () => {
    const [watch, setWatch] = useState(0);
const [timerId, settimerId] = useState(null)
   
    const start =() =>{
        if(!timerId){
            let id = setInterval(() =>{
                setWatch((prev) => prev+1);
            },1000);

            settimerId(id);
        }
    };
  
    const pause =()=>{
        clearInterval(timerId);
        setWatch(0);
    }
    const reset =()=>{
        clearInterval(timerId);
        setWatch(0);
    }

    return ( <div>
               <h2>stopwatch</h2>
               <h1>{watch}</h1>
        
               <div>
               <button onClick={start}></button>
               <button onClick={pause}></button>
           <button onClick={reset}></button>
      </div>

    </div> 
      
         
    )
}

export default Stopwatch;