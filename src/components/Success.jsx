import React from 'react'

function Success({email}) {
  return (
      <div className='bg-white sm:mt-0 sm:m-60 sm:rounded-3xl lg:m-[310px] xl:m-[400px] p-10 sm:p-14 lg:p-16 xl:p-[140px]'>
      <div className=''>
        <img src='src/assets/icon-success.svg' className='pt-20  sm:pt-0 lg:pt-0 '/>
          <h1 className='text-4xl sm:text-[55px] lg:text-[50px] xl:text-[50px] sm:leading-none font-bold pt-10 '>Thanks for subscribing!</h1>
        <p className='pt-10 '>A confirmation email has been sent to <span className='font-bold'>{email}</span>. 
          Please open it and click the button inside to confirm your subscription.
          </p>
           
            
            <button className='bg-darkslategrey text-white w-[300px] py-3 sm:w-[360px] lg:w-[370px] xl:w-[370px] mt-44 sm:mt-10  cursor-pointer rounded sm:mb-5 xl:mb-0 hover:bg-tomato'>Dismiss message</button>
        
      </div>
      </div>
  )
}

export default Success