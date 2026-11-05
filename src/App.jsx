import React from 'react'

const App = () => {

  const handler = (e) =>{
    e.preventDefault()
  }

  return (
    <div className='h-screen bg-black text-white'>

      <form onSubmit={handler} className='flex justify-between items-start  p-10'>

      <div className='flex w-1/2 items-start gap-4 flex-col'>
        <input type="text" placeholder='Enter Notes Headings' className='px-5 font-medium outline-none w-full py-2 border-2 rounded' />

        <textarea placeholder='Enter Details' className='px-5 w-full font-medium h-32 flex items-start flex-row outline-none py-2 border-2 rounded'/>

        <button className='bg-white text-black px-5 font-medium outline-none w-full py-2 rounded'>Add Note</button>
      </div>

      </form>
    </div>
  )
}

export default App
