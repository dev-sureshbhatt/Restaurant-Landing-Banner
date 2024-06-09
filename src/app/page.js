import Image from "next/image";
import { ProductListCard } from "./components/ProductListCard";
import FilterByCategory from "./components/FilterByCategory";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";

export default function Home() {
  return (
    <>
      <Navbar />


{/* ---------Banner Start--------------- */}

<Banner />



      {/*------ Start of Filter by Category Section -----*/}
      <div className="flex flex-col justify-center items-center my-14">
        {/* Title and Subtitle */}
        <div className="text-base font-semibold">Shop by Category</div>
        <div className="text-2xl md:text-3xl text-center">
          Top Category of Organic Food
        </div>

        <div className="py-4"></div>

        {/* Main Filter by Category Component */}
        <FilterByCategory />
      </div>
    </>
  );
}
