import React from "react"

const App = () => {

  const handler = (e) =>{
    e.preventDefault()
    console.log('Submitted')
  }

  return (
    <div className='h-screen lg:flex bg-black text-white'>
      <form onSubmit={handler} className='flex lg:w-1/2 gap-4 flex-col items-start p-10'>
        <h1 className='text-3xl font-bold'>Add notes</h1>
        <input type="text" placeholder='Enter Notes Headings' className='px-5 font-medium outline-none w-full py-2 border-2 rounded' />

        <textarea placeholder='Enter Details' className='px-5 w-full font-medium h-32 flex items-start flex-row outline-none py-2 border-2 rounded'/>

        <button className='bg-white text-black px-5 font-medium outline-none w-full py-2 rounded'>Add Note</button>

      </form>

      <div className='lg:w-1/2 bg-gray-900 lg:border-l-2 p-10'>
        <h1 className='text-3xl font-bold'>Your Recent notes</h1>
        <div className='flex gap-3 flex-wrap mt-3 overflow-auto h-full' >
          <div className='h-52 w-40 rounded-2xl bg-white'></div>
          <div className='h-52 w-40 rounded-2xl bg-white'></div>
          <div className='h-52 w-40 rounded-2xl bg-white'></div>
        </div>
      </div>
    </div>
  )
}

export default App