
import FeaturedMenu from "./featured-menu"
import SegmentGroup from "@/components/segment-group"
import {ClockIcon} from "@/components/icons/store-icons"
import { LocationIcon } from "@/components/icons/store-icons"
import { RightCircleIcon } from "@/components/icons/store-icons"
import { useState } from "react"
import MenuCard from "./menu-card"

export default function Store(){
    const[selectedIndex, setSelectedIndex] = useState("");
        const menuList = [
        { 
            id: 0,
            name: "진서밥집",
            image: "/home-banner2.png",
            price : "12000원"
    
        },
        { 
            id: 1,
            name: "진서카페",
            image: "/home-banner2.png",
            price : "12000원"
        },
        { 
            id: 2,
            name: "진서카페",
            image: "/home-banner2.png",
            price : "12000원"
        },
        { 
            id: 3,
            name: "진서카페",
            image: "/home-banner2.png",
            price : "12000원"
        },
    
    ]
    
    return(
        <div>
                <FeaturedMenu/>
                    <div className="py-[24px]">
                        <SegmentGroup/>
                    </div>
                    <div className="flex gap-[12px] items-center">
                        <div className="justify-start text-neutral-900 text-xl font-semibold leading-loose">ユジョンシクダン</div>
                        <div className="justify-start text-neutral-400 text-xs font-semibold leading-none">豚肉の焼き</div>
                    </div>
                    <div className="pt-[6px] self-stretch justify-start text-neutral-900 text-sm font-medium leading-tight">美味しい料理とサムギョプサルの幻想的な調和</div>
                    <div className="pt-[12px] flex gap-[2px] items-center">
                        <LocationIcon/>
                        <div className="justify-start text-neutral-500 text-xs font-medium leading-none">ソウル特別市 江南区 島山大路28ギル 14</div>
                    </div>
                    <div className="flex items-center">
                        <ClockIcon/>
                        <div className="pl-[2px] justify-start text-neutral-500 text-xs font-medium font-['Pretendard_JP'] leading-none">営業時間</div>
                        <div className="pl-1 justify-start text-neutral-500 text-xs font-medium font-['Pretendard_JP'] leading-none">10:00 - 21:30</div>
                    </div>
                    <div className="mt-[24px] w-full flex justify-between items-center">
                        <div className="flex items-center">
                            <div className="mr-[2px] text-neutral-900 text-base font-semibold leading-snug">メニュー</div>
                            <div className="text-neutral-500 text-base font-semibold leading-snug">11</div>
                        </div>
                        <div className="flex items-center">
                            <div className="text-neutral-400 text-xs font-medium leading-none">メニュー全体を見る</div>
                            <button onClick={()=>console.log("icon clicked")}>
                                <RightCircleIcon/>
                            </button>
                        </div>
                    </div>
                        <div className="mt-[12px]">
                            {menuList.map((menu, idx) => (
                                <MenuCard 
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