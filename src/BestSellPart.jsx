import React from 'react'
import SecHead from './components/SecHead'
import Button from './components/Button'
import Card from './components/Card'
import shirt from '../src/assets/shirt.png'


const BestSellPart = () => {
    return (
        <>
            <div className="container">
                <div className='mt-35 flex justify-between items-baseline-last'>
                    <SecHead
                        header="This Month"
                        heading="Best Selling Products"
                    />

                    <div className='mx-0 '>

                        <Button> View All</Button>
                    </div>
                </div>
                <div className='flex mt-15 justify-between'>
                    <Card
                     imgs={shirt}
                     Name="The north coat"
                     percent="10"
                     review="65"
                     DisPrice="260"
                     price="360"
                    />
                    <Card
                     imgs={shirt}
                     Name="The north coat"
                     percent="10"
                     review="65"
                     DisPrice="260"
                     price="360"
                    />
                    <Card
                     imgs={shirt}
                     Name="The north coat"
                     percent="10"
                     review="65"
                     DisPrice="260"
                     price="360"
                    />
                    <Card
                     imgs={shirt}
                     Name="The north coat"
                     percent="10"
                     review="65"
                     DisPrice="260"
                     price="360"
                    />
                    
                </div>
            </div>
        </>
    )
}

export default BestSellPart
