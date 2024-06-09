"use client";
import React, { useState } from "react";
import { ProductListCard } from "./ProductListCard";
import { dummyData } from "../dummyData";

const FilterByCategory = () => {
    const [data, setData] = useState(dummyData)
    const[displayItem, setDisplayItem] = useState(dummyData)
    const [selectedfilterName, setSelectedFilterName] = useState("MEAT AND SEAFOOD")
    let filters = ["FRUITS AND VEGETABLES", "BAKERY", "MEAT AND SEAFOOD"];


  function handleFilterButtonClick(filterName){
    console.log(filterName)
    const filteredItem = data.filter(item => item.category == filterName)
    setDisplayItem(filteredItem)
    setSelectedFilterName(filterName)

  }

  return (
    <>
      <div className="filters flex flex-wrap justify-center">
        {filters.map((item, index) => {
          return    <button
          className={item == selectedfilterName ? "selected-filter" : "non-selected-filter"}
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
