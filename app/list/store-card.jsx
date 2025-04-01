import Image from "next/image";

export default function StoreCard({ store, selected, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`
            flex items-center gap-4 w-full p-3 rounded-2xl bg-white 
            shadow-md transition border x
            ${selected ? "border-2 border-purple-500" : "border-transparent"}
        `}
    >
      {/* 썸네일: store.image가 있으면 이미지 표시 */}
      <div className="w-16 h-16 bg-gray-200 flex-shrink-0 rounded-xl">
        {store.image && (
          <Image
            src={store.image}
            alt={store.name}
            width={64}
            height={64}
            className="w-full h-full object-cover rounded-xl"
          />
        )}
      </div>

      {/* 텍스트 영역 */}
      <div className="flex flex-col text-left">
        <p className="text-base font-medium text-black">{store.name}</p>
        <div className="flex items-center gap-1 text-sm">
          <span className="text-yellow-500">★</span>
          <span className="text-black font-medium">4.6</span>
          <span className="text-gray-400">(182)</span>
        </div>
        <span className="mt-1 px-3 py-1 text-xs rounded-3xl bg-purple-500 text-white font-medium w-fit">
          BTS
        </span>
      </div>
    </button>
  );
}
