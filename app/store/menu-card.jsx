    import Image from "next/image";

    export default function MenuCard({menu, selected, onClick}) {
        return (
        <button 
            onClick={onClick}
            className={`
                w-full h-[72px] flex items-center justify-between  rounded-md
                ${selected ? "bg-gray-200" : "bg-white"}
                `}
        >
            <div className="flex flex-col pl-4 gap-1">
                <div className="self-stretch justify-start text-neutral-900 text-sm font-medium leading-tight">{menu.name}</div>
                <div className="justify-start text-neutral-900 text-sm font-normal leading-tight">{menu.price}</div>
            </div>  
            <div className="w-[56px] h-[56px] relative overflow-hidden">
                <Image
                    src= {menu.image}
                    alt="메뉴 사진"
                    fill
                    className="object-cover rounded"
                    />
            </div>


        </button>
        );
    }