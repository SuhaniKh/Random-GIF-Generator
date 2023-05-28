import React from 'react'
import Random from './components/Random'
import Tag from './components/Tag'

const App = () => {
  return (
    <div className='w-screen min-h-screen flex flex-col background overflow-x-hidden'>
      <h1 className='text-[30px] font-semibold mt-[40px] w-[60vw] mx-auto text-center bg-white border border-slate-200 rounded-xl'>RANDOM GIFS</h1>
      <div className='flex flex-col'>
        <Random/>
        <Tag/>
      </div>
    </div>
  )
}

export default App

