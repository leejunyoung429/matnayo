// ListPage.jsx
"use client";

import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/functions/index"; // 파일 경로에 맞게 수정하세요
import SearchBar from "@/components/searchbar";
import StoreCard from "@/app/list/store-card";

export default function ListPage() {
  const [stores, setStores] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "store"));
        const fetchedStores = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setStores(fetchedStores);
      } catch (error) {
        console.error("Error fetching stores:", error);
      }
    };

    fetchStores();
  }, []);

  return (
    <div className="w-full h-screen flex flex-col bg-white items-center">
      <div className="pt-4 px-4 pb-2">
        <SearchBar />
      </div>
      <div className="w-full flex-1 overflow-y-auto bg-[#F7F7FB] px-5 py-5 no-scrollbar">
        <div className="flex flex-col gap-3">
          {stores.map((store, idx) => (
            <StoreCard
              key={store.id}
              store={store}
              selected={selectedIndex === idx}
              onClick={() => setSelectedIndex(idx)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
