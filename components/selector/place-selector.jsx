import Image from "next/image";

const places = [
  { name: "西北圏", location: "SEOUL", image: "/places/northwest.png" },
  { name: "都心圏", location: "SEOUL", image: "/places/central.png" },
  { name: "東北圏", location: "SEOUL", image: "/places/northeast.png" },
  { name: "西南圏", location: "SEOUL", image: "/places/southwest.png" },
  { name: "東南圏", location: "SEOUL", image: "/places/southeast.png" },
];

export default function PlaceSelector() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-[20px] font-semibold leading-[30px] tracking-[-0.5px]">
        スポット
      </h2>

      <div className="flex overflow-x-auto gap-4 no-scrollbar pb-2">
        {places.map((place) => (
          <div
            key={place.name}
            className="min-w-[140px] h-[200px] rounded-xl overflow-hidden relative shrink-0"
          >
            <Image
              src={place.image}
              alt={place.name}
              fill
              className="object-cover"
            />
            <div className="absolute top-3 left-3 text-white drop-shadow-lg">
              <p className="text-sm font-semibold">{place.name}</p>
              <p className="text-xs">{place.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
