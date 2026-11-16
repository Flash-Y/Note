import React, { useState } from "react"

const App = () => { 

  const[heading,setH] = useState('')
  const[Detail,setD] =useState('')
  const[task, setTask] = useState([])

  const handler = (e) =>{
    e.preventDefault()
    let holdTask = [...task];

    holdTask.push({heading,Detail});
    setTask(holdTask);

    console.log(holdTask);
    
    

    setH('')
    setD('')
  }

  return (
    <div className='h-screen lg:flex bg-black text-white'>

      <form onSubmit={handler} className='flex lg:w-1/2 gap-4 flex-col items-start p-10'>

        <h1 className='text-3xl font-bold'>Add notes</h1>

      {/* Head area */}
        <input type="text" placeholder='Enter Notes Headings' className='px-5 font-medium outline-none w-full py-2 border-2 rounded' value={heading} onChange={(c)=>{
             setH(c.target.value);
        }} />

        {/* Detail area */}
        <textarea placeholder='Enter Details' className='px-5 w-full font-medium h-32 flex items-start flex-row outline-none py-2 border-2 rounded' value={Detail} onChange={(d)=>{
          setD(d.target.value);

        }}  />

        <button className='bg-white active:scale-105 active:bg-amber-600 text-black px-5 font-medium outline-none w-full py-2 rounded'>Add Note</button>

      </form>

      <div className='lg:w-1/2 bg-gray-900 lg:border-l-2 p-10'>
        <h1 className='text-3xl font-bold'>Your Recent notes</h1>
        <div className='flex gap-3 flex-wrap mt-3 overflow-y-auto max-h-[80vh]'>
          
          {task.map(function(num,idx){
            return <div key={idx} className='min-h-52 text-black p-4 w-40 rounded-2xl bg-white wrap-break-word overflow-y-auto'>
              <h3 className='leading-tight text-xs text-red-400'>{num.heading}</h3>
              <hr className='my-2 border-gray-400' />
              <h3 className='leading-tight text-xs mt-1.5'>{num.Detail}</h3>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App