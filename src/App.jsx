import React from 'react'

const App = () => {
  return (
    <div className='h-screen bg-black text-white'>

      <form className='flex justify-between items-start gap-4 p-10'>

      <div className='flex w-1/2 items-start flex-col'>
        <input type="text" placeholder='Enter Notes Headings' className='px-5 w-1/2 py-2 border-2 rounded' />

        <input placeholder='Enter Details' className='px-5 w-1/2 h-20 py-2 border-2 rounded'></input>

        <button className='bg-white text-black px-5 w-1/2 py-2 rounded'>Add Note</button>
      </div>

        <img src="https://png.pngtree.com/element_our/20190603/ourmid/pngtree-sticky-note-cartoon-illustration-image_1430615.jpg"/>
      </form>
    </div>
  )
}

export default App
