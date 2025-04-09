"use client"

import MenuListCard from "./menu-list-card"
import { useState } from "react";

export default function MenuList(){
    const[selectedIndex, setSelectedIndex] = useState("");
    const menuListExample = [
        {   
            id: 0,
            name: "ユジョンサムバプ",
            price: "12,000원"
        },
        {   
            id: 1,
            name: "ユジョンサムバプ",
            price: "12,000원"
        },
        {
            id: 2,
            name: "ユジョンサムバプ",
            price: "12,000원"
        },
        {
            id: 3,
            name: "ユジョンサムバプ",
            price: "12,000원"
        },
        {
            id: 4,
            name: "ユジョンサムバプ",
            price: "12,000원"
        },
        {
            id: 5,
            name: "ユジョンサムバプ",
            price: "12,000원"
        },
        {
            id: 6,
            name: "ユジョンサムバプ",
            price: "12,000원"
        },
        {
            id: 7,
            name: "ユジョンサムバプ",
            price: "12,000원"
        },
        {
            id: 8,
            name: "ユジョンサムバプ",
            price: "12,000원"
        },
        {
            id: 9,
            name: "ユジョンサムバプ",
            price: "12,000원"
        }
    ]
    return(
        <div>
            <div className="flex items-center my-[12px]">
                <div className="mr-[2px] text-neutral-900 text-base font-semibold leading-snug">メニュー</div>
                <div className="text-neutral-500 text-base font-semibold leading-snug">11</div>           
            </div>
            <div>
                {menuListExample.map((menu, idx) => (
                    <MenuListCard 
                        key={menu.id}
                        menu = {menu}
                        selected = {selectedIndex === idx}
                        onClick = {()=> setSelectedIndex(idx)}
                    />
                ))}
            </div>
        </div>

    )

}