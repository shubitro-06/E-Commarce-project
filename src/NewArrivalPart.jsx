import React from 'react'
import SecHead from './components/SecHead'
import Game from '../src/assets/Game.png'
import Women from '../src/assets/Women.png'
import Perfume from '../src/assets/Perfume.png'
import Speakers from '../src/assets/Speakers.png'

const NewArrivalPart = () => {
  return (
    <>
      <div className="container">
        <div className='mt-35 flex justify-center'>

          <SecHead
            header="Featured"
            heading="New Arrival"
          />
        </div>
        <div className='flex gap-7.5 justify-center mt-15'>
            <img src={Game} alt="" />
            <div className='flex flex-col gap-y-8'>
              <img src={Women} alt="" />
              <div className='flex justify-between'>
                <img src={Speakers} alt="" />
                <img src={Perfume} alt="" />
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default NewArrivalPart
