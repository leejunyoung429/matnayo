import Image from "next/image"
import { StarIcon } from "@/components/icons/store-icons"

export default function FeaturedMenu(){
    return(
        <div className="h-[85px] flex flex-shrink-0 rounded-[16px] border border-[#9747FF] bg-white shadow-custom pt-[12px] pl-[12px]">
                        <div className="w-[60px] h-[60px] overflow-hidden rounded-[16px] mr-[12px]">
                        <Image
                            src="/home-banner2.png"
                            alt="대표 음식 사진"
                            width={60}
                            height={60}
                            className="w-full h-full object-cover rounded-xl"
                            />
                        </div>
                        <div className="flex flex-col">
                            <div className="justify-start text-neutral-900 text-base font-medium leading-snug ">ユジョンシクダン</div>
                            <div className="flex">
                                <div className="mt-1 mr-[2px]">
                                    <StarIcon/>
                                </div>
                                <div className="mr-[2px] justify-start text-neutral-900 text-xs font-normal leading-none ">4.3</div>
                                <div className="justify-start text-zinc-300 text-xs font-normal leading-none">(727)</div>
                            </div>
                            <div className="mt-1 h-4 w-[35px] bg-purple-500 rounded-full backdrop-blur-[10px] inline-flex justify-center  ">
                                <div className="justify-start text-white text-[10px] font-medium">BTS</div>
                            </div>
                        </div>
                    </div>
    )


}