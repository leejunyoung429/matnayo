export default function MenuListCard({menu, selected,onClick}){
    return(
        <button 
            onClick={onClick}
            className={`
                w-full h-[52px] py-4 px-[20px] flex justify-between  rounded-md
                ${selected ? "bg-gray-200" : "bg-white"}
                `}
        >
            <div className="text-neutral-900 text-sm font-medium leading-tight">{menu.name}</div>
            <div className="text-neutral-900 text-sm font-normal leading-tight">{menu.price}</div>
        </button>
    )
}