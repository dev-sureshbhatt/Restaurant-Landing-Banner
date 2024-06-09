"use client";
import React, { useState } from "react";
import { ProductListCard } from "./ProductListCard";
import { dummyData } from "../dummyData";

const FilterByCategory = () => {
    const[displayItem, setDisplayItem] = useState(dummyData) 
  const [selectedFilter, setSelectedFilter] = useState([]);
  const [filteredItems, setFilteredItems] = useState();
  let filters = ["FRUITS AND VEGETABLES", "BAKERY", "MEAT AND SEAFOOD"];


  function handleFilterButtonClick(filterName){
    console.log(filterName)
    const filteredItem = displayItem.filter(item => item.category == filterName)
    setDisplayItem(filteredItem)

  }

  return (
    <>
      <div className="filters">
        {filters.map((item, index) => {
          return    <button
          onClick={()=>handleFilterButtonClick(item)}
          
                    >
            {item}</button>;
        })}
      </div>
      <div className="flex flex-wrap justify-center">
        {displayItem.map((item) => {
          return <ProductListCard item={item} />;
        })}
      </div>
    </>
  );
};

export default FilterByCategory;
