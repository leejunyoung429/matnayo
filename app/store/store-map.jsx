"use client"

import FeaturedMenu from "./featured-menu"
import SegmentGroup from "@/components/segment-group"
import React from "react"
import { LocationIcon } from "@/components/icons/store-icons"
import { CopyIcon } from "@/components/icons/store-icons"
import MapComponent from "./map-component"
import { useState } from "react"



export default function StoreMap(){
    const [showFullMap, setShowFullMap] = useState(false);
    const address = "ソウル特別市 江南区 島山大路28ギル 14";

    const handleCopy = () => {
        navigator.clipboard
            .writeText(address)
            .then(() => {
                alert("주소가 복사되었습니다!");
            })
            .catch(() => {
                alert("복사에 실패했습니다");
            });
    }
    
    
    return(
        <div>
            {showFullMap ? (
        <MapComponent height= "548px"/>
      ) : (
        <>
             <FeaturedMenu/>
            <div className="py-[24px]">
                <SegmentGroup/>
            </div>
            <div className="mx-5 text-neutral-900 text-xl font-semibold leading-loose">場所</div>
                <MapComponent onOpenFullMap={() => setShowFullMap(true)}/>
            <div className="flex justify-between py-[12px]">
                <div className="flex items-center gap-[2px]">
                    <LocationIcon/>
                    <div className="justify-start text-neutral-500 text-xs font-medium leading-none">{address}</div>
                </div>
                <button onClick= {handleCopy} className="flex items-center ">
                    <CopyIcon/> 
                    <div className="justify-start text-gray-400 text-xs font-normal leading-none">コピー</div>
                </button>
            </div>
        </>
        
      )}
        </div>
    )
}