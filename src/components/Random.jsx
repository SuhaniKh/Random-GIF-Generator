import React from 'react'
import Spinner from './spinner';
import useGif from './useGif';

const Random = () => {
  
  const {gif ,Loading ,fetchData} = useGif();

  return (
    <div className='flex flex-col w-[11/12] mx-auto mt-[4rem] bg-green-500 max-w-[1080px] gap-[2rem] border border-green-600 rounded-lg py-3 px-20'>
      <h1 className='text-[25px] font-medium text-center underline uppercase'>Random GIFs</h1>
      {
        Loading ?  (<Spinner/>):(<img src={gif} width="450px"/>)
      }
      <button onClick={()=>{fetchData()}}
      className='w-[10/12] bg-white opacity-80 py-2 rounded-xl'>Generate</button>
    </div>
  )
}

export default Random
