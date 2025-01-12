"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASEURL } from "@/configs/constants";
import { Skeleton } from "@/components/ui/skeleton";

export default function Trending() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const fetchBids = async (category = "all") => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${BASEURL}api/bids/get${category !== "all" ? `?category=${category}` : ""}`);
      setData(response.data.data);
    } catch (err) {
      setError(err.message || "An error occurred while fetching bids.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBids(selectedCategory);
  }, [selectedCategory]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="w-full flex flex-col p-5">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h1 className="text-3xl font-bold mb-2 md:mb-3">Trending Bids</h1>

        <div className="flex flex-wrap items-center gap-4 mb-4 md:mb-0">
          <button className={`text-gray-500 ${selectedCategory === "all" ? "font-bold" : ""}`} onClick={() => handleCategoryClick("all")}>
            All
          </button>
          <button className={`text-gray-500 ${selectedCategory === "music" ? "font-bold" : ""}`} onClick={() => handleCategoryClick("music")}>
            Music
          </button>
          <button className={`text-gray-500 ${selectedCategory === "collectibies" ? "font-bold" : ""}`} onClick={() => handleCategoryClick("collectibies")}>
            Collectibies
          </button>
          <button className={`text-gray-500 ${selectedCategory === "utility" ? "font-bold" : ""}`} onClick={() => handleCategoryClick("utility")}>
            Utility
          </button>
        </div>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Skeleton className="w-full h-48" />
              <div className="p-4">
                <Skeleton className="h-6 w-3/4 mb-4" />
                <Skeleton className="h-4 w-1/2 mb-4" />
                <Skeleton className="h-8 w-full" />
              </div>
            </div>
          ))}
        </div>
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {data.map((item) => (
            <div key={item._id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative">
                <img src={item.image} alt={item.name} className="w-full h-60 md:h-48 object-cover" />
                <div className="absolute inset-0 flex items-end justify-center bg-black bg-opacity-40 pb-5">
                  <div className="flex gap-8 bg-white bg-opacity-60 text-white px-4 py-2 rounded-lg">
                    <div className="text-center">
                      <p className="text-[11px] xl:text-[12px] font-medium">Current Bid</p>
                      <p className="text-[13px] xl:text-[15px] font-bold">{item.currentBid}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-[11px] xl:text-[12px] font-medium">Auction Time</p>
                      <p className="text-[13px] xl:text-[15px] font-bold">{item.auctionTime}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-md font-semibold">{item.name}</h3>
                  <button className={`rounded-full p-2 ${item.likes ? "bg-red-100 text-red-500" : "bg-red-100 text-red-400"}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill={item.likes ? "currentColor" : "none"} viewBox="0 0 24 24" stroke={item.likes ? "currentColor" : "currentColor"} className="w-3 h-3">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  </button>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <img src={item.author.authorProfilePic} alt={item.author.authorName} className="w-6 h-6 rounded-full" />
                  <p className="text-sm text-gray-500">{item.author.authorName}</p>
                </div>
                <div className="mt-2 flex justify-between">
                  <button className="px-4 py-1 text-gray-700 hover:bg-gray-200 transition text-sm rounded-2xl border border-gray-300">Details</button>
                  <button className="px-4 py-1 bg-indigo-600 text-white text-sm rounded-2xl hover:bg-blue-600 transition">Place a Bid</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
