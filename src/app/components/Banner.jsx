import Image from "next/image";
import React from "react";
import bannerImage from '/public/banner-img4.png'; // Import the image


const Banner = () => {
  return (
    <>
      <div className=" h-screen flex">
        <div className="left flex-[100%] lg:flex-[65%] bg-[#f2f1ec] flex justify-center items-center">
          {/* Banner Content */}
          <div className="max-w-[450px] flex flex-col gap-3 px-4 ">
            <span className="text-base font-semibold">Discount up to 20%</span>
            <div className="text-4xl">Buy Fresh And Organic Grocery Food</div>
            <p className="text-slate-400 font-normal text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad nobis
              a unde repudiandae, nostrum cum.
            </p>
            <div className="cta-and-count flex items-center my-1">
                <div className="cta flex-1">
                    <div className="cta-btn max-w-fit">Shop Now</div>
                </div>
                <div className="count flex-1 flex justify-between">
                    <div>
                        <div className="text-2xl font-semibold">35K +</div>
                        <div>Users</div>
                    </div>
                    <div>
                        <div className="text-2xl font-semibold">18K +</div>
                        <div>Products</div>
                    </div>
                </div>

            </div>
          </div>

          {/* Banner Content End */}
        </div>
        <div className="right flex-[40%]  bg-[#345333] hidden md:flex md:items-center">
            <div className="img-container">
            <Image className="rounded-full" src={bannerImage} width={400} height={400} />
            </div>
            
        </div>
      </div>
    </>
  );
};

export default Banner;
