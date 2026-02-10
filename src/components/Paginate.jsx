

import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Card from './Card';
import { useSelector } from 'react-redux'
import { AllProducts } from '../ProductSlice';

const Paginate = ({ itemsPerPage }) => {

    const AllProducts = useSelector((state) => state.AllProducts.value)
    const items = AllProducts;

function Items({ currentItems}) {
  return (
    <>
      {currentItems &&
        currentItems.map((item,idx) => (
          <Card
             key={idx}
             id={item.id}
             DetailsItem={item}
             imgs={item.thumbnail}
             Name={item.title}
             DisPrice={Math.round(item.price - (item.price * item.discountPercentage)/100)}
             price={Math.ceil(item.price)}
             review={item.reviews.length}
             percent={Math.round(item.discountPercentage)}
             rating={item.rating}
          />
        ))}
    </>
  );
}
 // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  return (
    
     <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel=""
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel=""
        renderOnZeroPageCount={null}
        className='absolute -bottom-20 left-0 flex gap-2.5'
        pageClassName='bg-black text-white px-4 cursor-pointer'

      />
    </>
  )
}

export default Paginate
