import { useEffect, useState } from 'react'
import data from './data.json'
import profilePic from "./assets/image-jeremy.png"
import ellipsis from "./assets/icon-ellipsis.svg"

import iconPlay from "./assets/icon-play.svg"
import iconSelfCare from "./assets/icon-self-care.svg"
import iconSocial from "./assets/icon-social.svg"
import iconStudy from "./assets/icon-study.svg"
import iconWork from "./assets/icon-work.svg"
import iconExercise from "./assets/icon-exercise.svg"

const iconList = [iconWork, iconPlay, iconStudy, iconExercise, iconSocial, iconSelfCare]


function App() {
  const [mode, setMode] = useState("daily")
  const changeMode = (e) => {
    e.preventDefault()
    setMode(e.target.innerHTML.toLowerCase())
  }

  return (
    <div className='h-screen w-screen bg-black flex justify-center items-center text-white'>
      <div className='flex w-3/5 h-fit justify-stretch items-stretch '>

        <div className='h-fit w-1/4 bg-navyd rounded-xl overflow-hidden flex flex-col pb-8'>
          <div className='h-fit w-full bg-navy rounded-xl p-8 pb-14 mb-4'>
            <div className='aspect-square w-14 border-2 border-white rounded-full mb-7'>
              <img src={profilePic} alt='profile-pic' className='' />
            </div>
            <span className='text-white/50 font-light text-sm '>Report for</span>
            <h1 className='text-3xl font-thin mt-2'>Jeremy Robson</h1>
          </div>

          <button className='text-white/50 text-left pl-8 mt-5 hover:text-white' onClick={changeMode} style={mode=="daily" ? {color: "white"} : {}}>Daily</button>
          <button className='text-white/50 text-left pl-8 mt-5 hover:text-white' onClick={changeMode} style={mode=="weekly" ? {color: "white"} : {}}>Weekly</button>
          <button className='text-white/50 text-left pl-8 mt-5 hover:text-white' onClick={changeMode} style={mode=="monthly" ? {color: "white"} : {}}>Monthly</button>
        </div>

        <div className='grid-2-3 w-3/4 ml-6'>
          {
            data.map((item, idx) => {
              return(
                <ItemTile item={item} mode={mode} idx={idx} />
              )
            })
          }

        </div>

      </div>
    </div>
  )

}

export default App


const ItemTile = ({item, mode, idx}) => {
  useEffect(()=>{
    console.log(idx)
  }, [])
  return(
    <div className='w-full h-full relative rounded-lg overflow-hidden'
      style={{background: item.color}}
    >
      <img src={iconList[idx]} className='absolute right-5 -top-2 w-16' />
      

      <div className='bg-navyd w-full h-4/5 absolute bottom-0 rounded-lg hover:bg-navyh p-6'>
        <div className='w-full flex items-center justify-between font-medium'>
          {item.title}
          <img src={ellipsis} className='hover:fill-white'/>
        </div>

        <h2 className='text-4xl font-extralight mt-6 mb-1'>
          {
            mode == "daily" ? item.timeframes.daily.current : 
            mode == "weekly" ? item.timeframes.weekly.current : item.timeframes.monthly.current
          } hrs
        </h2>

        <span className='text-sm text-white/50'>
          {
            mode == "daily" ? "Yesterday- " + item.timeframes.daily.previous : 
            mode == "weekly" ? "Last Week- " + item.timeframes.weekly.previous : "Last Month- " + item.timeframes.monthly.previous
          } hrs
        </span>

      </div>
      
    </div>
  )
}