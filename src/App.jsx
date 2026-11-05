import React from 'react'

const App = () => {
  return (
    <div className='h-screen  bg-black text-white'>
      <form className='flex items-start flex-col gap-4 p-10'>

        <input type="text" placeholder='Enter Notes Headings' className='px-5 w-1/2 py-2 border-2 rounded' />

        <input placeholder='Enter Details' className='px-5 w-1/2 h-20 py-2 border-2 rounded'></input>

        <button className='bg-white text-black px-5 w-1/2 py-2 rounded'>Add Note</button>
      </form>
    </div>
  )
}

export default App
