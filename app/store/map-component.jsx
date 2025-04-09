"use client"

import { useState } from "react";
import useKakaoLoader from "../hooks/kakao-map";
import { Map, CustomOverlayMap } from "react-kakao-maps-sdk";
import { useRef } from "react";
import { useEffect } from "react";



export default function MapComponent({onOpenFullMap, height = "251px"}){
    const [loading, error] = useKakaoLoader();
    const position = { lat: 
        37.5044034043625, lng: 127.043661150546};
    const imageUrl = "/home-banner2.png";
    const mapRef = useRef(null);

 
    useEffect(() => {
        if (mapRef.current) {
          mapRef.current.relayout();
        }
      }, [height, loading]); // height가 바뀔 때만 실행됨
    
   
    

    return(
        <div className="w-full rounded-2xl overflow-hidden" style={{ height }}>
            <Map // 지도를 표시할 Container
                ref={mapRef}
                center={position}
                style={{
                    // 지도의 크기
                    width: "100%",
                    height: height,
                }}
                level={3} // 지도의 확대 레벨
                onClick = {() => {
                    onOpenFullMap();
                }}
                >
                    <CustomOverlayMap 
                        position={position}
                        options={{
                            xAnchor: 0.5, // 가로 중앙 정렬
                            yAnchor: 1.0  // 세로 아래 기준 (바닥)
                            }}
                    >
                        <div className="flex flex-col gap-[4px] items-center ">
                            <div className="flex flex-col items-center">
                                <div className="px-3 py-2 bg-purple-500 rounded-[100px] inline-flex justify-center items-center gap-1.5">
                                    <div className="justify-start text-white text-xs font-medium leading-none">島山大路12,</div>
                                    <div className="justify-start text-white text-xs font-medium leading-none">ソウル</div>
                                </div>
                                <div className="w-3 h-3 bg-purple-500 rounded-full mt-[-4px]" />
                            </div>
                            <div
                            className="w-[61px] h-[61px] rounded-full border-2 border-white shadow-md bg-cover bg-center border-4"
                            style={{ backgroundImage: `url(${imageUrl})` }}
                            />
                        </div>
                    </CustomOverlayMap>
            </Map>
        </div>

    )
}