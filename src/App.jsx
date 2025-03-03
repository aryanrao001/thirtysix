import React, { useEffect } from 'react'
import Canva from './components/Canva'
import data from './data'
import LocomotiveScroll from 'locomotive-scroll';
import Navbar from './components/Navbar';

const App = () => {

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, [])
  

  return (
    <>
    <div className='w-full  relative min-h-screen  text-black font-[helvetica]  ' >
      {data[0].map((canvasdets,index) =>(
        <Canva details={canvasdets} />
      ))
      }      
     <Navbar/>

    </div>
    <div>
    </div>
    <div className='w-full  relative min-h-screen  text-white  ' >
      {data[1].map((canvasdets,index) =>(
        <Canva details={canvasdets} />
      ))
      }      
    </div>
    <div className='w-full  relative min-h-screen  text-white  ' >
      {data[2].map((canvasdets,index) =>(
        <Canva details={canvasdets} />
      ))
      }      
    </div>
    <div className='w-full  relative min-h-screen  text-white  ' >
      {data[8].map((canvasdets,index) =>(
        <Canva details={canvasdets} />
      ))
      }      
    </div>
    <div className='w-full  relative min-h-screen  text-white  ' >
      {data[4].map((canvasdets,index) =>(
        <Canva details={canvasdets} />
      ))
      }      
    </div>
    <div className='w-full  relative min-h-screen  text-white  ' >
      {data[8].map((canvasdets,index) =>(
        <Canva details={canvasdets} />
      ))
      }      
    </div>
    <div className='w-full  relative min-h-screen  text-white  ' >
      {data[1].map((canvasdets,index) =>(
        <Canva details={canvasdets} />
      ))
      }      
    </div>
  </>
  )
}

export default App