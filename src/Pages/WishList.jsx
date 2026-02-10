import React from 'react'
import BreadCrump from '../components/BreadCrump'
import Button2 from '../components/Button2'
import SecHead from '../components/SecHead'
import { useSelector } from 'react-redux'
import Card from '../components/Card'

const WishList = () => {
    const deta = useSelector((state) => state.AllProducts.wish)
    return (
        <>
            <div className="container">
                <BreadCrump
                    className="my-20"
                />
                <div className='flex justify-between'>
                    <h1 className='font-pop text-xl'>Wishlist({deta.length})</h1>
                    <Button2>Move All To Bag</Button2>
                </div>

                <div className='flex justify-between flex-wrap mt-15'>
                    {
                        deta && deta.filter(item => item != null).map((item) => {
                            return (
                                <Card
                                    key={item.id}
                                    id={item.id}
                                    DetailsItem={item}
                                    imgs={item.thumbnail}
                                    Name={item.title}
                                    DisPrice={Math.round(item.price - (item.price * item.discountPercentage) / 100)}
                                    price={Math.ceil(item.price)}
                                    review={item.reviews.length}
                                    percent={Math.round(item.discountPercentage)}
                                    rating={item.rating}
                                />
                            )
                        })
                    }

                </div>


                <div className='flex justify-between my-20'>
                    <SecHead
                        header="Just For You"
                    />
                    <Button2>See All</Button2>
                </div>
            </div>
        </>
    )
}

export default WishList
