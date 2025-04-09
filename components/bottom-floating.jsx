import { BookmarkIcon } from "@/components/icons/store-icons"


export default function BottomFloating(){
    return(

    <div className="w-full flex justify-center">
        <div className="fixed bottom-20 w-[292px] h-[56px] bg-white rounded-[100px] shadow-[0px_6px_12px_0px_rgba(0,0,0,0.12)] backdrop-blur-[10px] flex justify-between items-center pr-[12px] pl-4">
            <BookmarkIcon/>
            <button 
                onClick = {()=> console.log("gd")}
                className ="w-[88px] h-[40px] bg-purple-500 rounded-[100px] shadow-[2px_2px_4px_0px_rgba(0,0,0,0.06)] flex items-center px-4 "
            >
                <div className="text-center text-white text-sm font-semibold leading-tight">予約する!</div>
            </button>
        </div>
    </div>

    )

}