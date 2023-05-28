import React, {  useState } from 'react'
import Spinner from './spinner';
import useGif from './useGif';

const Tag = () => {
  const [tag, setTag] = useState("");
  const {gif ,Loading ,fetchData} = useGif(tag);




  return (
    <div className='flex flex-col w-[11/12] mx-auto mt-[4rem] bg-blue-500 max-w-[1080px] gap-[2rem] border border-green-600 rounded-lg py-3 px-20'>
      <h1 className='text-[25px] font-medium text-center underline uppercase'>Random {tag} GIFs</h1>
      {
        Loading ?  (<Spinner/>):(<img src={gif} width="450px"/>)
      }
      <input
        className='w-[10/12] bg-white opacity-80 py-2 rounded-xl text-center'
        type='text'
        onChange={(event)=>{setTag(event.target.value)}}
        value={tag}
      />
      <button onClick={()=>{fetchData()}}
      className='w-[10/12] bg-white opacity-80 py-2 rounded-xl'>Generate</button>
    </div>
  )
}

export default Tag
