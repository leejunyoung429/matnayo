"use client"

import { ArrowLeftIcon } from "@/components/icons/store-icons"
import BottomFloating from "@/components/bottom-floating"
import Store from "./store"
import MenuList from "./menu-list"
import StoreMap from "./store-map"
import Kpop from "./kpop"

export default function StorePage(){
    return(
        <div className="px-4">
            <div className="my-[20px]">
                <ArrowLeftIcon/>
            </div>
            
            <Kpop/>
            <BottomFloating/>
        </div>
    )

}