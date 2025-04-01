import Image from "next/image";
import SearchBar from "@/components/searchbar";
import KpopSelector from "@/components/selector/kpop-selector";
import CategorySelector from "@/components/selector/category-selector";
import PlaceSelector from "@/components/selector/place-selector";

export default function HomePage() {
  return (
    <div className="w-full h-full px-5 pt-4 pb-10  flex flex-col gap-8">
      {/* 이미지와 검색바 */}
      <div className="relative w-full">
        {/* 이미지 */}
        <Image
          src="/home-banner.png"
          alt="home"
          width={100}
          height={100}
          className="w-full h-auto object-cover"
        />

        {/* 이미지 위 텍스트 오버레이 */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
          <h2 className="text-xl sm:text-2xl font-bold">
            <span className="text-purple-500">BTS</span>メンバーが
          </h2>
          <p className="text-xl sm:text-2xl font-bold">
            最も愛するレストランを予約してください。
          </p>
        </div>

        {/* 검색바: 이미지 하단 중앙에 겹치게 */}
        <div className="w-full absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 flex justify-center">
          <SearchBar />
        </div>
      </div>

      {/* KPOP 카테고리 */}
      <KpopSelector />

      {/* グルメ 카테고리 */}
      <CategorySelector />

      {/* スポット 선택기 */}
      <PlaceSelector />
    </div>
  );
}
