import Image from 'next/image'
import React from 'react'
import demoImage from '/public/chicken-tikka.jpg'; // Import the image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const ProductListCard = ({item}) => {
  return (
    <div className='wrapper flex flex-col items-center md:flex-row flex-wrap gap-2 my-7 mx-7 justify-center'>
        <div className="">
            
            <Image className='rounded-full' src={demoImage} width={80} height={80} />
             
        </div>
        <div className="right flex flex-col gap-5 justify-between">
            <div className="title-and-price flex flex-col md:flex-row items-center justify-between border-b border-dashed border-[#ECECEC] gap-2 md:gap-16">
                <div className="title text-base md:text-2xl">{item.dishName}</div>
                <div className="price text-base md:text-2xl text-[#345333] font-bold">$8.45</div>
            </div>
            <div className="desc-and-cta flex flex-col md:flex-row items-center justify-between gap-2">
                <div className="desc text-sm md:text-base text-slate-400 text-center">Lorem ipsum dolor sit amet quam in lacus ricus</div>
                <div className="cta text-sm md:text-base font-semibold text-[#345333]">SHOP NOW</div>
                {/* <div className="cta text-sm md:text-base font-semibold text-[#345333]">
                Icon
                </div> */}
            </div>
        </div>
    </div>
  )


}
