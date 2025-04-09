import SegmentGroup from "@/components/segment-group"
import Image from "next/image";
export default function Kpop(){
    return(
        <div>
            <div className="mt-[24px]">
                <SegmentGroup/>
            </div>
            <div className="flex flex-col px-[5px] gap-[6px] mt-[12px]">
                <div className="self-stretch justify-start text-neutral-900 text-xl font-semibold leading-loose">K-POP情報</div>
                <div className="self-stretch justify-start text-neutral-500 text-sm font-medium leading-tight">BTSメンバーがよく訪れる、ARMYの聖地です。</div>
            </div>
            <div className="mt-[24px] flex flex-col gap-[12px]">
                <VideoEmbed 
                    youtubeUrl = "https://www.youtube.com/embed/hrpOWUZOXKI"
                />
                <div className="w-full h-[200px] relative rounded-xl overflow-hidden">
                    <Image
                        src = "/home-banner2.png"
                        alt = "kpop image"
                        fill/>
                </div>
            </div>
        </div>
    )
}

function VideoEmbed({youtubeUrl}){
    return (
        <div className="relative aspect-video w-full h-[103px] rounded-xl overflow-hidden">
          <iframe
            className="w-full h-full"
            src= {youtubeUrl}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      );
}