import { Tasks } from '@/components/Tasks'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { InputForm } from '@/components/input-form'
import React from 'react'

const Home = () => {
  return (
    <div className='flex flex-col items-center p-10 gap-y-8 '>
      <Header />
      <InputForm />
      <Tasks />
      <Footer />
    </div>
  )
}

export default Home