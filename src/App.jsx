import React from 'react'

const App = () => {
  return (
    <div className='h-screen bg-black text-white'>

      <form className='flex justify-between items-start  p-10'>

      <div className='flex bg-red-500 w-1/2 items-start gap-4 flex-col'>
        <input type="text" placeholder='Enter Notes Headings' className='px-5 w-full py-2 border-2 rounded' />

        <input placeholder='Enter Details' className='px-5 w-full h-20 py-2 border-2 rounded'></input>

        <button className='bg-white text-black px-5 w-full py-2 rounded'>Add Note</button>
      </div>

        <img className='h-80' src="https://freepngimg.com/thumb/note/4-2-note-png-clipart.png"/>
      </form>
    </div>
  )
}

export default App
