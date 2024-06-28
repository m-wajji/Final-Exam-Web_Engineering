import React from 'react'

export const HeaderCard = ({heading, number}: any) => {
  return (
    <div className='flex flex-col items-center justify-center border border-black w-[200px] h-[150px] rounded-md'>
        <p >{heading}</p>
        <h1 className='text-3xl font-bold'>{number}</h1>
    </div>
  )
}
