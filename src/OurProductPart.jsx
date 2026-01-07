import React from 'react'
import SecHead from './components/SecHead'
import Card from './components/Card'


const OurProductPart = () => {
    return (
        <>
            <div className="container">

                <SecHead
                    header="Our Products"
                    heading="Explore Our Products"
                />
                <div>
                    <Card
                      Name=""
                      imgs=""
                      price=""
                      DisPrice=""
                      review=""
                      percent=""
                    />
                </div>
            </div>
        </>
    )
}

export default OurProductPart
