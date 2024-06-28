'use client'
import React, { useEffect, useState } from 'react'
import { HeaderCard } from './header-card'
import { getTasks } from '@/actions/getTasks';

export const Header = () => {
  const [tasks, setTasks] = useState<any>();

  useEffect(() => {
    getTasks()
      .then((data) => {
        setTasks(data);
        
      })
      .catch((err) => {
        console.log(err);
      });
  }, [tasks]);


  return (
    <div className='grid grid-cols-3 gap-5'>
        <HeaderCard heading={'Total task'} number={'04'} className='bg-slate-700' />
        <HeaderCard heading={'Completed'} number={'02'} />
        <HeaderCard heading={'Pending'} number={'02'}  />
    </div>
  )
}
