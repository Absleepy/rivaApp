/* eslint-disable no-nested-ternary */
import React, { useState } from "react";
import BlackCloseBtn from "../../../common/Buttons/BlackCloseBtn/BlackCloseBtn";
 import Dropdown from "../../../common/Dropdowns/Dropdown/Dropdown";
 import style from './filters.module.scss';
import Drawer from "@material-ui/core/Drawer";
import CheckBoxComponent from "./CheckBoxComponent";
import  Search  from "../Search";
import RangeSlider from "./RangeSlider";


const List = ({item}) =>{
  return (
    <div className={style.listContainer}>
      <span></span>
      <span>{item.title}</span>
    </div>
  )}

const Colors = ({colors}) =>{ 
 
  return (
    <div className="d-flex align-items-center flex-wrap gap-12">
      {colors.map((color, i) => (
        <div
          className="border-radius-50 c-pointer"
          key={i}
          style={{ backgroundColor: color, width: "30px", height: "30px" }}
        ></div>
      ))}
    </div>
  );

}
 
const t = [
  {
    id: 1,
    title: 'Categories',
    isParent: true,
    children: [
      {
        id: 11,
        title: 'Range',
        isItem: false, 
        children: [ 
         
          {
            id: 1111, 
            isItem: true,
            type: "range"
          },
           
        ],
        
      },
      {
        id:12232,
        title: 'Testing',
        isItem: true, 
        children: [
          {
            id: 11,
            title: 'ALL',
            isItem: false, 
            children: [
              {
                id: 111,
                title: 'List One',
                isItem: false,
                type: "list"
              },
              {
                id: 1111,
                title: 'something 1',
                isItem: true,
                type: "checkbox"
              },
              {
                id: 11111,
                title: 'something 2',
                isItem: true,
                type: "checkbox"
              },
              {
                id: 12311,
                title: 'List Two',
                isItem: false,
                type: "list"
              },
              {
                id: 1111,
                title: 'something 1',
                isItem: true,
                type: "checkbox"
              },
              {
                id: 11111,
                title: 'something 2',
                isItem: true,
                type: "checkbox"
              },
              {
                id: "11asdf1",
                title: 'List Thres',
                isItem: false,
                type: "list"
              },
              {
                id: 1111,
                title: 'something 1',
                isItem: true,
                type: "checkbox"
              },
              {
                id: 11111,
                title: 'something 2',
                isItem: true,
                type: "checkbox"
              },
            ],
            
          },
          {
            id: 11,
            title: 'ALL',
            isItem: true, 
            
          },
          
        ],
      },
      
    ],

    
  },
  {
    id: 2,
    title: 'Colors',
    isParent: true,
    children: [
      {
        id: 11,
        title: 'test',
        isItem: true, 
        type: "colors",
        colors: ['red', 'blue', 'orange', 'yellow'],
      },
      
    ],
  },
  {
    id: 2,
    title: 'Categories',
    isParent: true,
    children: [
      {
        id: 112,
        title: 'ALL',
        isItem: false, 
        children: [
          {
            id: 1112,
            title: 'something',
            isItem: false,
            type: "list"
          },
          {
            id: 11112,
            title: 'something 1',
            isItem: true,
            type: "checkbox"
          },
          {
            id: 111112,
            title: 'something 2',
            isItem: true,
            type: "checkbox"
          },
        ],
        
      },
      {
        id: 11,
        title: 'ALL',
        isItem: true,
        
        
      },
    ],
  },
  {
    id: 2,
    title: 'Style',
    isParent: true,
    children: [
      {
        id: 11,
        title: 'Lace',
        isItem: false,
      },
      {
        id: 11,
        title: 'Pen',
        isItem: false,
      },
    ],
  },
  {
    id: 12,
    title: 'Style',
    isParent: true,
    children: [
      {
        id: 222,
        title: 'Lace',
        isItem: false,
      },
      {
        id: 351,
        title: 'Pen',
        isItem: false,
      },
    ],
  },
];

 

function Filters() {
  
  
  const drawerPosition = "top";

  const renderFilters = () => {
    const [searchValue, setSearchValue] = useState('')

    const [open, setOpen] = useState(true);


    const closeDrawer = () => {
      setOpen(false);
    };
    const openDrawer = () => {
      setOpen(true);
    };
  

    const handleSearchChange = e =>{
      setSearchValue(e.target.value)
    }

     

    const renderComponent = (item) =>{

      const handleCheckboxChange = () =>{
        console.log('object')
      }
      



      

      switch(item.type){
        case "checkbox" : 
        return <CheckBoxComponent item={item} handleCheckboxChange={handleCheckboxChange}/>
        case "list" : 
        return <List item={item}/>
        case "range" : 
        return <RangeSlider />
        case "colors" : 
        return <Colors colors={item.colors}/>
        
        default: item
      }
    }

    const menu = (items, depth) => (
      <>

       <Dropdown item={items}>
          {items.children.map((item) =>
            item.children ? (
              menu(item, depth + 1)
            ) :  (
              renderComponent(item)               
            )
          )}
        </Dropdown> 

      
      </>
    );

    return (
      <>
      <button onClick={openDrawer}>Click me</button>
      <Drawer anchor={drawerPosition} onClose={closeDrawer} open={open}>
        
        <RangeSlider />
        <div className={style.filtersContainer}>
        <h2 className={style.filterBy}>Filter By</h2>
        <BlackCloseBtn
          handleClose={closeDrawer}
          drawerPosition={drawerPosition}
        />
      <Search handleChange={handleSearchChange} value={searchValue}/>
        <div className={style.filtersGrid}>
          {t.map((item) => menu(item, 1))}
        </div>
        </div>
      </Drawer>
      </>
    );
  };

  return <div>{renderFilters()}</div>;
}

export default Filters;
