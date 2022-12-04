import React ,{useState} from 'react'
import './styleRes.css'
import Menu from './menuApi.js'
import MenuCard from './MenuCard';
import Navbar from './Navbar';


const uniqueList=[...new Set(Menu.map((curEl)=>{
    return curEl.category;
})),"All"];
// console.log(uniqueList);
const Restaurant = () => {
    const[ menuData,setMenuData]=useState(Menu);//useState hook
    const[menuList,setMenuList]=useState(uniqueList);
    // console.log(menuData);
    const filterItem=(category)=>{

        if(category==="All"){
            setMenuData(Menu);
            return;
        }
        const upDateList=Menu.filter((curEl)=>{
            return curEl.category===category;
        })
        setMenuData(upDateList);
    };
  return (
    <>
       <Navbar filterItem={filterItem} menuList={menuList}/>
       <MenuCard menuData={menuData}/>
    </>
  )
}

export default Restaurant;