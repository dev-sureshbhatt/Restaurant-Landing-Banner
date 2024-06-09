"use client";
import React, { useState } from "react";
import { ProductListCard } from "./ProductListCard";
import { dummyData } from "../dummyData";

const FilterByCategory = () => {
    const [data, setData] = useState(dummyData)
    const[displayItem, setDisplayItem] = useState(dummyData.filter(item => item.category == "MEAT AND SEAFOOD"))
    const [selectedfilterName, setSelectedFilterName] = useState("MEAT AND SEAFOOD")
    let filters = ["FRUITS AND VEGETABLES", "BAKERY", "MEAT AND SEAFOOD", "BISCUIT AND SNACKS", "BEVERAGE"];

    


  function handleFilterButtonClick(filterName){
    console.log(filterName)
    const filteredItem = data.filter(item => item.category == filterName)
    setDisplayItem(filteredItem)
    setSelectedFilterName(filterName)

  }

  return (
    <div  className="h-screen my-4">
      <div className="filters flex flex-wrap justify-center">
        {filters.map((item, index) => {
          return    <div
          className={item == selectedfilterName ? "selected-filter" : "non-selected-filter"}
          onClick={()=>handleFilterButtonClick(item)}
                    >
            {item}</div>;
        })}
      </div>
      <div className="flex flex-wrap justify-center">
        {displayItem.map((item) => {
          return <ProductListCard item={item} />;
        })}
      </div>
    </div>
  );
};

export default FilterByCategory;
