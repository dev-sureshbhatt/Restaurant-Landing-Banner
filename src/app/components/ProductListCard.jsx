import Image from 'next/image'
import React from 'react'
import demoImage from '/public/demo.jpeg'; // Import the image


export const ProductListCard = ({item}) => {
  return (
    <div className='wrapper flex flex-wrap gap-2 my-7 mx-7'>
        <div className="image">
            <Image className='rounded-full' src={demoImage} width={80} height={80} />  
        </div>
        <div className="right flex flex-col justify-between">
            <div className="title-and-price flex justify-between gap-20 border-b border-dashed border-[#ECECEC]">
                <div className="title text-2xl">{item.dishName}</div>
                <div className="price text-2xl text-[#345333] font-bold">$8.45</div>
            </div>
            <div className="desc-and-cta flex justify-between">
                <div className="desc text-base text-slate-400">Lorem ipsum dolor sit amet quam in lacus ricus</div>
                <div className="cta text-base font-semibold text-[#345333]">SHOP NOW</div>
            </div>
        </div>
    </div>
  )


}
